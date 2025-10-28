const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");

const config = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
});

module.exports = config;
