import time
from watchdog.observers.polling import PollingObserver as Observer
from watchdog.events import FileSystemEventHandler

class MyHandler(FileSystemEventHandler):
    def on_created(self, event):
        print(f"Created: {event.src_path}")

    def on_modified(self, event):
        print(f"Modified: {event.src_path}")

    def on_deleted(self, event):
        print(f"Deleted: {event.src_path}")

    def on_moved(self, event):
        print(f"Moved: {event.src_path} -> {event.dest_path}")

if __name__ == "__main__":
    path_to_watch = "/mnt/mateus/stash/1"

    event_handler = MyHandler()
    observer = Observer(timeout=2)  # polling interval (seconds)
    observer.schedule(event_handler, path=path_to_watch, recursive=True)

    observer.start()
    print(f"Watching (polling): {path_to_watch}")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()

    observer.join()