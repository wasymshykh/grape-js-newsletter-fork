const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const pkg = require('./package.json');
const name = 'grapesjs-preset-newsletter';
const env = process.env.WEBPACK_ENV;
const plugins = [];

if(env !== 'dev'){
  // plugins.push(new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }));
  plugins.push(new webpack.BannerPlugin(pkg.name + ' - ' + pkg.version));
}

module.exports = {
  entry: './src',
  output: {
      filename: '../public/dist/' + name + '.min.js',
      library: name,
      libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: /src/,
      exclude: [
        /node_modules/
      ]
    }],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  externals: {'grapesjs': 'grapesjs'},
  plugins: plugins
};
