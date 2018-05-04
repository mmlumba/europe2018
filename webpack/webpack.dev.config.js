var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(scss)$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            },
            {
                loader: "postcss-loader",
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ]
                    }
                }
            }, {
                loader: "sass-loader"
            }]
        }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}