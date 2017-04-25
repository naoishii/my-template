// .eslintrc.js
const { Neutrino } = require('neutrino');
const pkg = require('./package.json');
const api = Neutrino();

// If the Airbnb preset is not included in pkg.neutrino.use,
// use it manually:
api.use(require('neutrino-preset-airbnb'));

// Add the rest of the presets:
pkg.neutrino.use
  .map(require)
  .map(api.use);


module.exports = api.eslintrc();
