import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)",
    "../src/**/*.story.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  webpackFinal: async (config) => {
    
    if (!config.resolve) config.resolve = {};

    if (!config.resolve.alias) config.resolve.alias = {};
    
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    config.resolve.alias['@app'] = path.resolve(__dirname, '../src/app');

    return config;
  },
};
export default config;