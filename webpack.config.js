module.exports = {
    //entry : "./app/assets/scripts/App.js",
    /*
    output : {
        
        path : "./",
        path :  __dirname + "/app/temp/scripts",
        filename : "App.js"
        
    },
     path :  (__dirname,"./app/temp/scripts"),
    entry: "./app/assets/scripts/App.js",
    output: {
        path: "./app/temp/scripts",
        filename: "App.js"
        },
    
    
    */
    //works on webpack 3.0.0 and babel is replaced by babel-loader
    entry: "./app/assets/scripts/App.js",
    output : {
        
        path : "./",
        path :  __dirname + "/app/temp/scripts",
        filename : "App.js"
        
    },
    
    module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}