Package.describe({
  name: "psdfile-parser",
  summary: "A Photoshop file format (PSD) parser. Can export PNGs and Thumbnails..."
  git: "https://github.com/andruschka/meteor-psdfile-parser.git"
});
Npm.depends({
  "png":"3.0.3",
  "gm":"1.16.0"
});
Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('psd.js', ['server','client']);
});