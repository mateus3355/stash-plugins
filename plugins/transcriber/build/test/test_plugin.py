import contextlib
import io
import json
import os
import subprocess
import sys
import tempfile
import unittest
import unittest.mock

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

import plugin


class FakeCompletedProcess:
    def __init__(self, stdout="", stderr="", returncode=0):
        self.stdout = stdout
        self.stderr = stderr
        self.returncode = returncode


class ReadJsonTests(unittest.TestCase):
    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)

    def write(self, name, content):
        path = os.path.join(self.tmpdir.name, name)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        return path

    def test_reads_valid_json(self):
        path = self.write("a.json", '{"x": 1}')
        self.assertEqual(plugin.read_json(path, "default"), {"x": 1})

    def test_missing_file_returns_default(self):
        self.assertEqual(plugin.read_json(os.path.join(self.tmpdir.name, "missing.json"), "default"), "default")

    def test_malformed_json_returns_default_instead_of_raising(self):
        path = self.write("bad.json", "{not valid json")
        self.assertEqual(plugin.read_json(path, "default"), "default")


class SummarizeFailedTests(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(plugin.summarize_failed({}), {"count": 0, "recent": []})

    def test_counts_and_sorts_by_most_recent_first(self):
        failed = {
            "/a.mp4": {"error": "e1", "when": "2026-01-01T00:00:00"},
            "/b.mp4": {"error": "e2", "when": "2026-01-03T00:00:00"},
            "/c.mp4": {"error": "e3", "when": "2026-01-02T00:00:00"},
        }
        result = plugin.summarize_failed(failed)
        self.assertEqual(result["count"], 3)
        self.assertEqual([e["path"] for e in result["recent"]], ["/b.mp4", "/c.mp4", "/a.mp4"])

    def test_caps_recent_list_but_keeps_the_full_count(self):
        failed = {f"/{i}.mp4": {"error": "e", "when": f"2026-01-{i:02d}T00:00:00"} for i in range(1, 30)}
        result = plugin.summarize_failed(failed)
        self.assertEqual(result["count"], 29)
        self.assertEqual(len(result["recent"]), plugin.RECENT_FAILED_LIMIT)
        # The most recent (highest day number) comes first.
        self.assertEqual(result["recent"][0]["path"], "/29.mp4")

    def test_ignores_malformed_entries_instead_of_crashing(self):
        failed = {"/a.mp4": {"error": "e", "when": "2026-01-01T00:00:00"}, "/b.mp4": "not a dict"}
        result = plugin.summarize_failed(failed)
        self.assertEqual(result["count"], 1)


class GetCurrentConfigTests(unittest.TestCase):
    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)

    def write_unit(self, content):
        path = os.path.join(self.tmpdir.name, "transcriber.service")
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        return path

    def test_missing_unit_file_returns_none(self):
        self.assertIsNone(plugin.get_current_config(os.path.join(self.tmpdir.name, "nope.service")))

    def test_parses_input_dir_language_and_user_from_a_real_unit(self):
        path = self.write_unit(
            "[Service]\n"
            "User=mateus\n"
            'ExecStart=/opt/transcriber/venv/bin/python /opt/transcriber/transcriber.py "/mnt/videos" --language pt --watch 300\n'
        )
        self.assertEqual(
            plugin.get_current_config(path),
            {"inputDir": "/mnt/videos", "language": "pt", "user": "mateus"},
        )

    def test_unit_without_a_matching_execstart_returns_none(self):
        path = self.write_unit("[Service]\nExecStart=/bin/true\n")
        self.assertIsNone(plugin.get_current_config(path))

    def test_missing_user_line_is_tolerated(self):
        path = self.write_unit('ExecStart=/x/transcriber.py "/mnt/videos" --language en --watch 300\n')
        self.assertEqual(plugin.get_current_config(path), {"inputDir": "/mnt/videos", "language": "en"})


class ConfigureTests(unittest.TestCase):
    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)
        self.unit_path = os.path.join(self.tmpdir.name, "transcriber.service")

    def write_unit(self, content):
        with open(self.unit_path, "w", encoding="utf-8") as f:
            f.write(content)

    def test_rejects_a_missing_input_dir_without_calling_sudo(self):
        run = unittest.mock.Mock()
        result = plugin.configure("", "en", run=run, unit_path=self.unit_path)
        self.assertIn("error", result)
        run.assert_not_called()

    def test_rejects_an_unsupported_language_without_calling_sudo(self):
        run = unittest.mock.Mock()
        result = plugin.configure("/mnt/videos", "fr", run=run, unit_path=self.unit_path)
        self.assertIn("error", result)
        run.assert_not_called()

    def test_calls_install_script_via_sudo_with_the_existing_user_preserved(self):
        self.write_unit(
            "[Service]\nUser=mateus\n"
            'ExecStart=/x/transcriber.py "/old/path" --language en --watch 300\n'
        )
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(returncode=0))
        plugin.configure("/mnt/videos", "pt", run=run, unit_path=self.unit_path)
        run.assert_called_once_with(
            ["sudo", "-n", plugin.INSTALL_SCRIPT, "/mnt/videos", "pt", "mateus"],
            capture_output=True, text=True, timeout=900,
        )

    def test_omits_the_user_argument_when_not_previously_installed(self):
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(returncode=0))
        plugin.configure("/mnt/videos", "en", run=run, unit_path=self.unit_path)
        run.assert_called_once_with(
            ["sudo", "-n", plugin.INSTALL_SCRIPT, "/mnt/videos", "en"],
            capture_output=True, text=True, timeout=900,
        )

    def test_success_returns_the_newly_written_config(self):
        def fake_run(args, **kwargs):
            self.write_unit(
                f'ExecStart=/x/transcriber.py "{args[-2]}" --language {args[-1]} --watch 300\n'
            )
            return FakeCompletedProcess(returncode=0)

        result = plugin.configure("/mnt/videos", "pt", run=fake_run, unit_path=self.unit_path)
        self.assertEqual(result, {"ok": True, "config": {"inputDir": "/mnt/videos", "language": "pt"}})

    def test_a_nonzero_exit_is_reported_as_an_error_with_the_actual_message(self):
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(stderr="ERROR: folder not found: /mnt/videos", returncode=1))
        result = plugin.configure("/mnt/videos", "en", run=run, unit_path=self.unit_path)
        self.assertEqual(result, {"error": "ERROR: folder not found: /mnt/videos"})

    def test_a_timeout_is_reported_not_raised(self):
        def raising_run(*args, **kwargs):
            raise subprocess.TimeoutExpired(cmd="install_service.sh", timeout=900)

        result = plugin.configure("/mnt/videos", "en", run=raising_run, unit_path=self.unit_path)
        self.assertIn("error", result)

    def test_an_unexpected_exception_is_reported_not_raised(self):
        def raising_run(*args, **kwargs):
            raise FileNotFoundError("sudo not found")

        result = plugin.configure("/mnt/videos", "en", run=raising_run, unit_path=self.unit_path)
        self.assertIn("error", result)


class GetStatusTests(unittest.TestCase):
    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)

    def write(self, name, content):
        with open(os.path.join(self.tmpdir.name, name), "w", encoding="utf-8") as f:
            f.write(content)

    def test_reads_status_and_failed_and_the_service_state(self):
        self.write("status.json", json.dumps({"state": "watching", "files_done": 5}))
        self.write("failed.json", json.dumps({"/a.mp4": {"error": "e", "when": "2026-01-01T00:00:00"}}))
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(stdout="active\n"))

        result = plugin.get_status(self.tmpdir.name, run=run)

        self.assertEqual(result["status"], {"state": "watching", "files_done": 5})
        self.assertEqual(result["failed"]["count"], 1)
        self.assertEqual(result["serviceActive"], "active")
        run.assert_called_once_with(
            ["systemctl", "is-active", "transcriber.service"], capture_output=True, text=True, timeout=10
        )

    def test_missing_status_file_is_reported_as_none_not_an_error(self):
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(stdout="inactive\n"))
        result = plugin.get_status(self.tmpdir.name, run=run)
        self.assertIsNone(result["status"])
        self.assertEqual(result["failed"], {"count": 0, "recent": []})

    def test_systemctl_failure_is_reported_not_raised(self):
        def raising_run(*args, **kwargs):
            raise FileNotFoundError("systemctl not found")

        result = plugin.get_status(self.tmpdir.name, run=raising_run)
        self.assertIn("unknown", result["serviceActive"])

    def test_includes_the_current_config_when_the_unit_exists(self):
        unit_path = os.path.join(self.tmpdir.name, "transcriber.service")
        with open(unit_path, "w", encoding="utf-8") as f:
            f.write('ExecStart=/x/transcriber.py "/mnt/videos" --language en --watch 300\n')
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(stdout="active\n"))
        result = plugin.get_status(self.tmpdir.name, run=run, unit_path=unit_path)
        self.assertEqual(result["config"], {"inputDir": "/mnt/videos", "language": "en"})

    def test_config_is_none_when_the_unit_does_not_exist(self):
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(stdout="inactive\n"))
        result = plugin.get_status(self.tmpdir.name, run=run, unit_path=os.path.join(self.tmpdir.name, "nope.service"))
        self.assertIsNone(result["config"])


class ControlTests(unittest.TestCase):
    def test_rejects_an_unknown_action_without_calling_systemctl(self):
        run = unittest.mock.Mock()
        result = plugin.control("reboot-the-server", run=run)
        self.assertIn("error", result)
        run.assert_not_called()

    def test_start_calls_sudo_systemctl_non_interactively(self):
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(returncode=0))
        result = plugin.control("start", run=run)
        self.assertEqual(result, {"ok": True})
        run.assert_called_once_with(
            ["sudo", "-n", "systemctl", "start", "transcriber.service"],
            capture_output=True, text=True, timeout=30,
        )

    def test_stop_and_restart_are_also_accepted(self):
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(returncode=0))
        self.assertEqual(plugin.control("stop", run=run), {"ok": True})
        self.assertEqual(plugin.control("restart", run=run), {"ok": True})

    def test_a_nonzero_exit_is_reported_as_an_error_with_the_actual_message(self):
        run = unittest.mock.Mock(return_value=FakeCompletedProcess(stderr="sudo: a password is required", returncode=1))
        result = plugin.control("start", run=run)
        self.assertEqual(result, {"error": "sudo: a password is required"})

    def test_an_exception_running_the_command_is_reported_not_raised(self):
        def raising_run(*args, **kwargs):
            raise FileNotFoundError("sudo not found")

        result = plugin.control("start", run=raising_run)
        self.assertIn("error", result)


class MainOutputEnvelopeTests(unittest.TestCase):
    """main()'s stdout must match Stash's plugin JSON-RPC protocol (pkg/plugin/common/msg.go
    PluginOutput) - see subtitleMarkers.py's equivalent tests for why this matters."""

    def run_main(self, args):
        stdin = json.dumps({"server_connection": {}, "args": args})
        out = io.StringIO()
        with contextlib.redirect_stdout(out), unittest.mock.patch("sys.stdin", io.StringIO(stdin)):
            plugin.main()
        return json.loads(out.getvalue())

    def test_status_mode_wraps_its_result_under_output(self):
        with tempfile.TemporaryDirectory() as tmp:
            with unittest.mock.patch("subprocess.run", return_value=FakeCompletedProcess(stdout="active\n")):
                printed = self.run_main({"mode": "status", "stateDir": tmp})
        self.assertIn("output", printed)
        self.assertEqual(printed["output"]["serviceActive"], "active")
        self.assertNotIn("error", printed)

    def test_control_failure_is_an_error_key_with_no_output(self):
        with unittest.mock.patch("subprocess.run", return_value=FakeCompletedProcess(stderr="nope", returncode=1)):
            printed = self.run_main({"mode": "start"})
        self.assertEqual(printed, {"error": "nope"})

    def test_defaults_to_status_mode_when_mode_is_omitted(self):
        with tempfile.TemporaryDirectory() as tmp:
            with unittest.mock.patch("subprocess.run", return_value=FakeCompletedProcess(stdout="active\n")):
                printed = self.run_main({"stateDir": tmp})
        self.assertIn("serviceActive", printed["output"])

    def test_configure_mode_dispatches_to_configure(self):
        with unittest.mock.patch("subprocess.run", return_value=FakeCompletedProcess(returncode=0)):
            printed = self.run_main({"mode": "configure", "inputDir": "/mnt/videos", "language": "pt"})
        self.assertIn("output", printed)
        self.assertTrue(printed["output"]["ok"])

    def test_configure_mode_rejects_a_bad_language_without_calling_sudo(self):
        with unittest.mock.patch("subprocess.run") as run:
            printed = self.run_main({"mode": "configure", "inputDir": "/mnt/videos", "language": "fr"})
        self.assertIn("error", printed)
        run.assert_not_called()


if __name__ == "__main__":
    unittest.main()
