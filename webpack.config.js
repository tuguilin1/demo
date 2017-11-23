/*
* @Author: tuguilin
* @Date:   2017-11-17 09:21:36
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-22 15:02:13
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
		'cookdetail':['./src/page/cookdetail/index.js'],
		'searchdetail':['./src/page/searchdetail/index.js']
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
	resolve:{
		alias:{
			util:path.join(__dirname,'src/util'),
			image:path.join(__dirname,'src/image'),
			page:path.join(__dirname,'src/page'),
			service:path.join(__dirname,'src/service'),
			view:path.join(__dirname,'src/view'),
			common:path.join(__dirname,'src/common'),
			node_modules:path.join(__dirname,'node_modules'),
		}
	},
	devServer: {
	    publicPath: '/dist',
		hot: true,
	    proxy: {
	        // 请求到 '/device' 下 的请求都会被代理到 target： http://debug.xxx.com 中
	        '/search/*': { 
	            target: 'https://way.jd.com/jisuapi/search',
	            secure: false, // 接受 运行在 https 上的服务
	            changeOrigin: true
	        }, 
	        '/byclass/*': { 
	            target: 'https://way.jd.com/jisuapi/byclass',
	            secure: false, // 接受 运行在 https 上的服务
	            changeOrigin: true
	        },
  			'/byid/*': { 
	            target: 'https://way.jd.com/jisuapi/detail',
	            secure: false, // 接受 运行在 https 上的服务
	            changeOrigin: true
	        }

	    }
    },
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			filename:'js/base.js'
		}),
		new ExtractTextPlugin('css/[name].css'),
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('cookdetail')),
		new HtmlWebpackPlugin(getHtmlConfig('searchdetail')),
		new webpack.HotModuleReplacementPlugin()
	]
};

if('dev'=== WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
}

module.exports = config;