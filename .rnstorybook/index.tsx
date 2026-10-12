import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerRootComponent } from "expo";
import { view } from "./storybook.requires";

// When STORYBOOK_ENABLED=true, withStorybook in metro.config.js swaps the
// app entry point for this file, so it registers the root component itself.
const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

registerRootComponent(StorybookUIRoot);
