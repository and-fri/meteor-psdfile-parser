Package.describe({
  name: "psdfile-parser",
  summary: "A Photoshop file format (PSD) parser. Can export PNGs and Thumbnails..."
});
Npm.depends({
  "png":"https://github.com/herrBeesch/node-png/tarball/a0939bd264d5d7930a8d4e509aa43405e971026e",
  "gm":"1.16.0",
  "png": "3.0.3"
});
Package.on_use(function(api) {
  api.add_files('psd.js', ['server','client']);
});
