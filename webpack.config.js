//importando el modulo path
const path = require('path');

//exportar el modulo

module.exports = {
  entry: './index.js',
    output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}
