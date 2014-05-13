Package.describe({
  name: "psdfile-parser",
  summary: "A Photoshop file format (PSD) parser."
});

Package.on_use(function(api) {
  api.export('PSD', 'server');
  api.add_files('psd.js', 'server');
});