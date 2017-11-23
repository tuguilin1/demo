/*
* @Author: tuguilin
* @Date:   2017-11-22 14:42:05
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-22 21:09:37
*/
var api=require('util/api.js')
require('./index.css')
var normalbanner = require('util/banner.js')
window.onload = function(){
	var keyword =api._getUrlParam('keyword')
	var allcook=[]
	var getallcook = function(){
		var data={
			"keyword":keyword,
			"appkey":'a463821a7f0fe98dbc3da2055678d238',
			'num':10
		}
		api._getallcook(data).then((res)=>{
			if(res.data.code=='10000'){
				allcook=normalbanner(res.data.result.result.list)
				if(res.data.result.result==''){
					cooksall.innerHTML="没有相关信息"
				}
			}
		})
	}
	var cooksall=document.getElementById('cooksall')
	var timer = setInterval(()=>{
		if(allcook.length!=0){
			
			var template='{{#list}}'+'<div class="cooks"><a href="{{url}}"><div class="cooksimg"><img src="{{pic}}"></div></a><div class="cooksdetail"><span class="cooksname">菜谱名：{{name}}</span><span class="tag">标签：{{tag}}</span></div></div>'+'{{/list}}'
			var result1 = api.renderHtml(template,{list:allcook})
			cooksall.innerHTML=result1
			clearInterval(timer)
		}
	},300)
	
	getallcook()
}