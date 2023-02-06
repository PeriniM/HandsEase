const path = require('path');

module.exports = {
  mode: 'development',
  entry:['./src/index.js', './src/sketchTHREE.js'],
  devServer: {
    static: './dist',
  },
  performance: {
    //maxAssetSize: 1000000,
    hints: false,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    topLevelAwait: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};