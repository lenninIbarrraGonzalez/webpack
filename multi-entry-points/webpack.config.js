//importando el modulo path
const path = require('path');

//exportar el modulo

module.exports = {
  entry: {
    home:path.resolve(__dirname,'src', 'js', 'home.js'),
    precios:path.resolve(__dirname, 'src', 'js', 'precios.js'),
    contacto:path.resolve(__dirname, 'src', 'js', 'contacto.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'bundle-[name].js'
  }
}

