const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        app: `./index.js`,
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:6].js',
        publicPath: '/'
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            cacheGroups: {
                'commons': {
                    minChunks: 2,
                    chunks: 'all',
                    name: 'commons',
                    priority: 10,
                    enforce: true,
                },
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:6]',
                            camelCase: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    performance: {
        hints: 'error'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `./200.html`,
            template: `./index.html`
        }),
        new CleanWebpackPlugin(['dist']),
    ]
}