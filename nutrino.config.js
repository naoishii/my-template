// If using as a preset from the CLI or configured in package.json,
// override its configuration directly:
const merge = require('deepmerge');

module.exports = neutrino => {
  neutrino.config.module
  .rule('lint')
  .use('eslint')
  .tap(options => merge(options, {
    rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
  }));
};
