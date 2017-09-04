
const path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.')
  },
  
  node: { module: "empty", net: "empty", fs: "empty" }
};
