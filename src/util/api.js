/*
* @Author: tuguilin
* @Date:   2017-11-18 13:13:38
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-22 15:27:01
*/
var axios = require('axios');
var hogan = require('hogan.js');

var alt={
	_getJson :function(param={}){
			const url = '/byclass/'
			return axios.get(url,{params:param}).then((res)=>{
				return Promise.resolve(res)
		})
	},
	_getcookdetail:function(param={}){
		const url='/byid/'
		return axios.get(url,{params:param}).then((res)=>{
				return Promise.resolve(res)
		})
	},
	_getallcook:function(param={}){
		const url='/search/'
		return axios.get(url,{params:param}).then((res)=>{
				return Promise.resolve(res)
		})
	},
	renderHtml:function(htmlTemplate,data){
		var template = hogan.compile(htmlTemplate);
		return template.render(data)
	},
	expertdetail:{
		0:"减肥专区",

		1:"瘦身专区",

		2:"消脂专区",

		3:"丰胸专区",

		4:"美容专区",

		5:"养颜专区",

		6:"美白专区",

		7:"防晒专区",
		8:"排毒专区",
		9:"祛痘专区"

	},
	_getUrlParam:function (name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null){
			return decodeURI(r[2]); 
		}
		return null; 
	} 
} 

module.exports=alt
