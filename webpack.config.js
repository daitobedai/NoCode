var webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot','babel?presets[]=react,presets[]=es2015']
        }]
    }
};