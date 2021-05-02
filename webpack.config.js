// simple Configuration-

let config={
    // The module where webpack should start.  
    
    // entry is an object which defines the three bundles: old version
    // entry: { 
    //     vendor: './src/vendor.ts',
    //     polyfills: './src/polyfills.ts',
    //     main: './src/main.ts'
    //  }
     
    //   mode: 'development',old version

    entry:'./index.js',

    // where webpack emits the bundles it creates. you can also override the defaults entry/output points.
    // "scripts": {
    //     "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
    //     "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
    //     }
       
    output:{
        
        // var path = require('path');
        //    path: path.resolve(__dirname, 'dist'),

        filename:'output.js' // // After running webpack above code all your javascript code in file 'output.js'

    }

}
module.exports=config;  //  in case if you have multiple configurations [ serverConfig, clientConfig ];







