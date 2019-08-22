//importando el modulo path
const path = require('path');

//exportar el modulo

module.exports = {
  entry: {
    home:path.resolve(__dirname,'src', 'js', 'index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'bundle-[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }

    ]
  }
}

