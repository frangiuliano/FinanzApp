module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'babel-plugin-postcss',
      {
        plugins: {
          'postcss-preset-env': {},
          'postcss-nested': {},
        },
      },
    ],
  ],
};
