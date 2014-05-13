Package.describe({
  name: "psdfile-parser",
  summary: "Easy geocoding by way of the node-geocoder package"
});

Package.on_use(function(api) {
  api.export('PSD', 'server');
  api.add_files('psd.js', 'server');
});