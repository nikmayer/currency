const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const mode = process.env.NODE_ENV;

module.exports = (env, argv) => {
  const mode = argv.mode;
  const isDevMode = mode == 'development';
  console.log(`This is the Webpack 4 'mode': ${mode}`);
  return {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    mode: mode,
    devtool: 'source-map',
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/bundle.js',
      assetModuleFilename: 'assets/[name]_[hash][ext][query]',
      chunkFilename: 'js/[name].[hash].js',
      asyncChunks: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(sa|sc)ss$/i,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,

            isDevMode
              ? {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[name]__[local]__[hash:base64:5]',
                    },
                  },
                }
              : 'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/i,
          use: [isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },

        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/,
          type: 'asset/inline',
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
  };
};
