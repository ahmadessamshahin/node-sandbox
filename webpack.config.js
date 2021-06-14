const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.ts',
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  devtool:
    process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.mjs', '.json', '.ts', '.js'],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@config': path.resolve(__dirname, './src/config'),
      '@src': path.resolve(__dirname, './src')
    }
  },
  watchOptions: {
    poll: true,
    ignored: '/node_modules/'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist/'
  },
  target: 'node',
  externals: [nodeExternals()],
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.webpack')
          ]
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
