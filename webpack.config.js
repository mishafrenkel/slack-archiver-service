
// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   // devtool: 'eval',
//   entry: [
//     // activate HMR for React
//     'webpack-hot-middleware/client',
//     './client/js/index',
//   ],
//   output: {
//     path: '/',
//     filename: 'bundle.js',
//     publicPath: '/',
//   },
//   plugins: [
//     // OccurenceOrderPlugin is needed for webpack 1.x only
//     // new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NamedModulesPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//   ],
//   module: {
//     loaders: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
//   }
// };

var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client');

module.exports = {
  entry: `${SRC_DIR}/js/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js?/,
  //       include: SRC_DIR,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['react', 'es2015']
  //       }
  //     }
  //   ]
  // }
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'client'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015', 'stage-0'],
          plugins: ["transform-class-properties", "transform-decorators-legacy", "@babel/plugin-transform-regenerator"]
        }
      }
    ]
  }
};
