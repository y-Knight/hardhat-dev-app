const path = require('path');

module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss'
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    const rootPath = path.resolve(__dirname, '../assets/');
    config.resolve.alias['@'] = rootPath;
    return config;
  }
}