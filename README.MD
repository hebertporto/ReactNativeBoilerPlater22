# React Native Boiler Plate Project 2022

Basic project structure for new react-native projects.

## Structure Folder

## Import / Export Fil

- Named export files only
- Abosolute import

> Step 1 | Add this babel plugin package

```sh
yarn add --dev babel-plugin-module-resolver
```

> Step 2 | Edit babel.config.js

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@app': './src',
        },
      },
    ],
    'jest-hoist',
  ],
};
```

> Step 2 | Edit tsconfig.json
> Uncomment or add the lines below in tsconfig.json

```json
{
    ...,
    "baseUrl": "./",
    "paths": {
        "@app/*": ["src/*/index", "src/*"]
    },
    ...,
}
```

## Navigation

## Styling

- StyleSheet from react-native
- Theme folder with pre set common styles
- Scaling Size: React-native-size-matters [docs](https://github.com/nirsky/react-native-size-matters)

## Prettier Config

## Testing
