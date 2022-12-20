const { join } = require('path');
const config  = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, './dist')
  },
  module: {
    rules: [
      {test: /\.scss|.css$/,
      use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  }
}

module.exports = config