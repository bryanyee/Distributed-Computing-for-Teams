const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
 devtool: 'source-map',
 mode: 'development',
 watch: true,
 devServer: {
   historyApiFallback: true,
   contentBase: './',
   inline: true
 }
});
