![picture of storybook](https://github.com/user-attachments/assets/cf98766d-8b90-44ab-b718-94ab16e63205)

An Expo (SDK 57) template with React Native Storybook (on device) and React Native Web Storybook (Vite).

# getting started

```sh
npx create-expo-app --template expo-template-storybook AwesomeStorybook
```

or with pnpm

```sh
pnpm create expo-app --template expo-template-storybook AwesomeStorybook
```

`create-expo-app` installs dependencies with the package manager you ran it with. The commands below use pnpm; with npm use `npm run <script>` instead (e.g. `npm run storybook`).

The template includes a `pnpm-workspace.yaml` with the settings pnpm needs for this project (hoisted `node_modules`, allowed build scripts and dependency overrides). npm and yarn users get the same dependency override through `overrides` / `resolutions` in `package.json`, and can delete `pnpm-workspace.yaml`.

# app

```sh
pnpm start
```

# RN Storybook (ondevice)

In this template you can run `pnpm storybook` to start ondevice storybook or `pnpm start` to start your expo app.
This works via entry-point swapping: when the `STORYBOOK_ENABLED=true` env variable is set, `withStorybook` in `metro.config.js` replaces the app entry point with `.rnstorybook/index.tsx`. When it is not set, your app runs normally and no Storybook code is included in the bundle.

```sh
# either
pnpm storybook

# ios
pnpm storybook:ios

# android
pnpm storybook:android
```

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```sh
pnpm storybook-generate
```

# Web

Start react native web storybook:

```sh
pnpm storybook:web
```

build react native web storybook:

```sh
pnpm build-storybook
```

## Using NativeWind with the web storybook

The web storybook is built with Vite, not Metro, so NativeWind's Metro/Babel setup is not applied there. After setting up NativeWind for your app, also configure the Vite based storybook:

```ts
// .storybook/main.ts
framework: {
  name: "@storybook/react-native-web-vite",
  options: {
    pluginReactOptions: {
      jsxImportSource: "nativewind",
    },
  },
},
```

```ts
// .storybook/preview.tsx
import "../global.css";
```

Your Tailwind/PostCSS config needs to be picked up by Vite as well (e.g. a `postcss.config.js` with `tailwindcss` for NativeWind v4). See [vite-rnw-example](https://github.com/dannyhw/vite-rnw-example) for a working configuration.
