// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
// //   entry: './app.js',
//   entry: {
//     server: './app.js',
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'build'),
//     publicPath: '/',
//   },
//   target: 'node',
//   node: {
//     // Need this when working with express, otherwise the build fails
//     __dirname: false,   // if you don't put this is, __dirname
//     __filename: false,  // and __filename return blank or /
//   },
//   externals: [nodeExternals()],
//   plugins: [
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.jsx$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//     ],
//   },
//     devtool: (() => {
//       return 'cheap-module-eval-source-map'
//     })(),
//     resolve: {
//       extensions: ['*', '.jsx', '.js']
//   },
// }
