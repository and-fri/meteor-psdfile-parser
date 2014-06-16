Package.describe({
  name: "psdfile-parser",
  summary: "A Photoshop file format (PSD) parser. Can export PNGs and Thumbnails..."
});
Npm.depends({
  "png":"https://github.com/herrBeesch/node-png/tarball/0429db87585f1d17e027d930c160e31ef93e55d4",
  "gm":"1.16.0"
});
Package.on_use(function(api) {
  api.add_files('psd.js', ['server','client']);
});