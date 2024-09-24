const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  }
};