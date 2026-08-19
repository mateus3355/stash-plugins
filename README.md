# Template for creating Stash plugins source index  

This template allows you to create a new repository with a few clicks with preconfigured GitHub action to publish your plugins source index. 
_This assumes you already know how to create plugins for Stash. If you don't, first read [this](https://docs.stashapp.cc/in-app-manual/plugins/#creating-plugins)._

## How to use it?

1. Click **Use this template** > **Create a new repository**. 
1. Choose a repository name and click **Create repository**.
1. Open **Settings** and head to **Pages**.
1. Under Build and deployment select the Source as GitHub Actions.

Now add your plugins to [plugins](/plugins) directory and they will be automatically published to the source index.

Source index URL: [`https://mateus2k2.github.io/stash-plugins/main/index.yml`](https://mateus2k2.github.io/stash-plugins/main/index.yml)

## Share your plugins

- [Create a new topic](https://discourse.stashapp.cc/t/-/33) for your plugin on the community forum.
- [Add your source index to the list](https://discourse.stashapp.cc/t/-/122) on the Stash community forum.

## License

The default license is set to [AGPL-3.0](/LICENCE). Before publishing any plugins you can change it.


https://docs.stashapp.cc/in-app-manual/plugins/
https://docs.stashapp.cc/in-app-manual/plugins/externalplugins/
https://docs.stashapp.cc/in-app-manual/plugins/embeddedplugins/
https://docs.stashapp.cc/in-app-manual/plugins/uipluginapi/


https://docs.stashapp.cc/installation/linux/

systemctl status stash
journalctl -u stash > stash.log
journalctl -u stash --since "20 minutes ago" > stash.log

cd /root/stash-app/
systemctl stop stash
https://github.com/stashapp/stash/releases/download/v0.31.1/stash-linux
chmod +x stash-linux
systemctl start stash

FILE="/mnt/mateus/stash/1/Amadores/Omegle/omeotp/omeotpnew/shorts-flashes/heather omegle game.mp4"
ffmpeg -fflags +genpts -hwaccel cuda -i "$FILE" \
  -c:v h264_nvenc -preset p5 -cq 23 \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  fixed.mp4
ffmpeg -i "$FILE" -c copy -map 0 -shortest fixed.mp4
rm "$FILE"
mv fixed.mp4 "$FILE"

document.querySelectorAll(".form-check-input").forEach(e => e.click())
document.querySelectorAll(".separator").forEach(e => e.nextElementSibling.querySelector(".form-check-input").click())
