nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  target: 'node',
  externals: [nodeExternals()]
};
