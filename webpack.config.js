
const path = require('path');

const isDev = process.env === "development";

const config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};

if(isDev) {
    config.devServer = {
        port: '8080',
        host: '0.0.0.0',
        overlay: {
            errors: true,
        }
    }
}


module.exports = config;