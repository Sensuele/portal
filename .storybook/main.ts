const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/vue3-webpack5',
    options: {}
  },
  staticDirs: [path.join(__dirname, '..', 'src', 'shared/assets')],
  webpackFinal: async (config, {
    configType
  }) => {
    config.resolve.modules.push(__dirname, '..', '..', 'src');
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader"],
      include: path.resolve(__dirname, '../')
    });
    return config;
  }
};