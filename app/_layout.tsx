import { Stack } from "expo-router";

const StorybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Protected guard={StorybookEnabled}>
        <Stack.Screen
          name="storybook"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>
      <Stack.Screen name="index" />
    </Stack>
  );
}
