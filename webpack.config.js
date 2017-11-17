/*
* @Author: tuguilin
* @Date:   2017-11-17 09:21:36
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-17 19:39:49
*/
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WEBPACK_ENV = process.env.WEBPACK_ENV||'dev';

var getHtmlConfig=function(name){
	return{
		template:`./src/view/${name}.html`,
		filename:`view/${name}.html`,
		inject:true,
		hash:true,
		chunks:['common',name]
	};
};
var config={
	entry:{
		'common':['./src/page/common/index.js'],
		'index':['./src/page/index/index.js'],
		'login':['./src/page/login/index.js'],
	},
	output:{
		path:path.join(__dirname,'dist'),
		filename:'js/[name].js',
		publicPath:'/dist'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:'css-loader'
				})
			},
			{
				test:/\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
				use:'url-loader?limit=100&name=resource/[name].[ext]'
			}
		]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			filename:'js/base.js'
		}),
		new ExtractTextPlugin('css/[name].css'),
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('login')),
	]
};

if('dev'=== WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
}

module.exports = config;