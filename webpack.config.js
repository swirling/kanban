var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/main'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loaders: ['style', 'css','less'],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};

if(TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: 'eval',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel?stage=1'],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    },
    devServer: {
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}