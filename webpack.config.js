import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (env) => {
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
          use: [
            { loader: _loader },
            { loader: 'css-loader' },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({        
        template: './src/index.html'        
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  };
};
