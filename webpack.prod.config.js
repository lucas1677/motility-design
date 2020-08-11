const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.html', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              useRelativePath: true,
              name: '[name].[ext]',
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
