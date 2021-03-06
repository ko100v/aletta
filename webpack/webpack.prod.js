const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    context: resolve(__dirname, '../src'),
    entry: {
        app: `./index.js`,
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: resolve(__dirname, '../dist'),
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
    // resolve: {
    //     alias: {
    //         react: 'preact-compat',
    //         'react-dom': 'preact-compat'
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `./200.html`, //`./index.html`,
            template: `./index.html`
        }),
        new CleanWebpackPlugin(['dist'], {
            root: resolve(__dirname, '..')
        }),
        new OfflinePlugin(),
        new CopyWebpackPlugin([{
            from: resolve(__dirname, '../icons'),
            to: resolve(__dirname, '../dist')
        }])
    ]
}