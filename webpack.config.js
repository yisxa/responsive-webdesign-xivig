//var path = require('path');


module.exports = {
    //entry : './app/assets/scripts/App.js',
    entry : './src/App.js',

    output : {
        

        //path: "./app/temp/scripts",



        path : path.resolve(__dirname, 'dist'),
        filename : 'App.js'
        
    },
    module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}