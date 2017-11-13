/* webpack基础配置 */
var webpack = require('webpack')
var utils = require("./common/utils")
var config = require("./config")

module.exports = {
    entry: config.entry,
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': utils.resolve('../src'),
            'C': utils.resolve('../src/components')
        }
    },
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "B": "backbone",
            "_": "underscore",
            "_S": "underscore.string"
        })
    ]
}