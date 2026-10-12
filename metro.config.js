const { getDefaultConfig } = require("expo/metro-config");
const { withStorybook } = require("@storybook/react-native/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = withStorybook(defaultConfig);
