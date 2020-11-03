const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const mode = env.production ? 'production' : 'development';

  return {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode,
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
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        },
        {
          test: /\.css$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  };
};
