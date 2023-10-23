const glob = require('glob');
const path = require('path');
const fs = require('fs');

module.exports = {
  entry: {
    app: './src/index.js',
    ...glob.sync('./node_modules/**/package.json').reduce((acc, path) => {
      const packageName = JSON.parse(fs.readFileSync(path)).name;
      const packageMain = JSON.parse(fs.readFileSync(path)).main;
      acc[packageName] = `./node_modules/${packageName}/${packageMain}`;
      return acc;
    }, {}),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};