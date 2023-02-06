const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry:['./src/main/index_tf.js', './src/js/sketch3d.js'],
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
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "@mediapipe/hands/hand_landmark_full.tflite", to: 'mediapipe/hands', context: 'node_modules' },
        { from: "@mediapipe/hands/hands_solution_packed_assets_loader.js", to: 'mediapipe/hands', context: 'node_modules' },
        { from: "@mediapipe/hands/hands_solution_simd_wasm_bin.js", to: 'mediapipe/hands', context: 'node_modules' },
        { from: "@mediapipe/hands/hands_solution_simd_wasm_bin.wasm", to: 'mediapipe/hands', context: 'node_modules' },
        { from: "@mediapipe/hands/hands_solution_packed_assets.data", to: 'mediapipe/hands', context: 'node_modules' },
        { from: "@mediapipe/hands/hands.binarypb", to: 'mediapipe/hands', context: 'node_modules' },
      ],
    }),
  ],
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