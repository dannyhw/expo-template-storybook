const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const withStorybook = require("@storybook/react-native/metro/withStorybook");

const config = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",

  // this removes storybook from the bundle when the enabled flag is set to false
  onDisabledRemoveStorybook: true,
});

module.exports = config;
