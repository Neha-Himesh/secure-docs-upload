// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//     mode: 'development',
//     devtool: 'eval-source-map',
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     watch: true,
//     devServer: {
//         contentBase: path.join(__dirname, 'dist'),
//         compress: true,
//         port: 9000
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         })
//     ]
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Updated contentBase to static
        },
        compress: true,
        port: 9000,
        hot: true, // Enable Hot Module Replacement
        historyApiFallback: true, // Useful for single-page applications (SPA)
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
