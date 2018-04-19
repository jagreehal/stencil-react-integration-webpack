const path = require('path');
const sass = require('@stencil/sass');

exports.config = {
  autoprefixer: {
    browsers: ['last 2 versions']
  },
  namespace: 'stencil-app',
  outputTargets: [{
    type: 'dist'
  },{
    type: 'www'
  }],
  plugins: [
    sass({
      includePaths: [path.resolve(__dirname, 'src/scss')]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};