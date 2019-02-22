const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PRODUCTION = NODE_ENV === "production";

module.exports ={
  entry: ['./src/js/index.js', './src/style/index.scss'],
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [' ', '.scss', '.js'],
  },
  plugins: [
  new ExtractTextPlugin('../css/bundle.css'),
  ],
  devtool: IS_PRODUCTION ? 'none' : 'source-map',
  watch: !IS_PRODUCTION,
  module: {
    rules: [
    {
      test: /\.js?$/,
      exclude: /\/node_modules\//
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '../fonts/'
        }
      }]
    },
    {
      exclude: /\/node_modules\//,
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: !IS_PRODUCTION,
            minimize:  IS_PRODUCTION,
          }
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: !IS_PRODUCTION }
        }
        ]
      })
    }
    ]
  }
};

if( IS_PRODUCTION ) {
  module.exports.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions:{
        minimize: true
      }
    })
  )
}