const webpack = require('webpack');
const stencil = require('@stencil/webpack');

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new stencil.StencilPlugin({
      collections: [
        'node-modules/stencil-components/dist/stencil-app'
      ]
    })
  ]
};
