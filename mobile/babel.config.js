const path = require('node:path');
const fs = require('node:fs');

const tsconfigPath = path.join(__dirname, 'jsconfig.json');
const tsconfigContent = fs
  .readFileSync(tsconfigPath, {
    encoding: 'utf-8',
  })
  .replace(/\/\/.+/g, '');

const tsconfigData = JSON.parse(tsconfigContent);

const { baseUrl, paths } = tsconfigData.compilerOptions;
const aliases = !paths
  ? {}
  : Object.keys(paths).reduce(function (acc, name) {
      const aliasName = name.replace('/*', '');
      const aliasPaths = paths[name].map(function (pathItem) {
        return './' + path.join(baseUrl, pathItem.replace('/*', ''));
      });

      acc[aliasName] = aliasPaths;
      return acc;
    }, {});

module.exports = {
  presets: ['@babel/preset-react', 'module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@app-env',
        blocklist: ['REACT_EDITOR'],
      },
    ],

    [
      'module-resolver',
      {
        root: ['./'],
        alias: aliases,
        extensions: [
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
        ],
      },
    ],

    '@babel/plugin-proposal-export-namespace-from',
  ],
};
