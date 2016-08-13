var path = require('path');
var webpack = require('webpack');

var srcDir = path.resolve(__dirname, 'src');
var distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(srcDir, 'main.es6.js'),
    output: {
        path: distDir,
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: srcDir
            }
        ]
    },
    stats: {
        colors: true
    }
};
