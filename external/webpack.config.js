//importando el modulo path
const path = require('path');

//exportar el modulo

module.exports = {
  entry: path.resolve(__dirname,'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

