const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const mode = env.production ? 'production' : 'development';

  return {
    entry: './src/index.jsx',
    mode: mode,
    output: {
      filename: './main.js',
    },
    devServer: {
      compress: true,
      port: 9000,
      watchContentBase: true,
      progress: true,
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  };
};
