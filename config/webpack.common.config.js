const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
    entry: {
        main: ["./src/app/app.js"],
        styles: ["./src/app/styles.scss"]
    },
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ExtractTextPlugin('[name].css'),
        new CleanPlugin(['../dist'], { allowExternal: true }),
        new HtmlPlugin({
            filename: 'index.html',
            template: commonPaths.template,
            favicon: commonPaths.favicon,
            inject: true
        })
    ]
};

module.exports = config;
