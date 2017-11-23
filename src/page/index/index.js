/*
* @Author: tuguilin
* @Date:   2017-11-17 09:14:01
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-23 09:29:07
*/


require('./index.css');
require('../login/module.js');


var normalBanner= require('util/banner.js');
var alt = require('util/api.js');




window.onload = ()=>{
	// require('../common/expert.js')
	// var banner=new Array
	// var getBanner = function(){
	// 	const classid = Math.floor(Math.random()*10 +1)
	// 	const data = {
	// 		'classid':classid,
	// 		'start':0,
	// 		'num':5,
	// 		'appkey':'a463821a7f0fe98dbc3da2055678d238'
	// 	};
	// 	alt._getJson(data).then((res)=>{
	// 		const timer=setInterval(()=>{
	// 			if(res.data.code==10000){
	// 				banner=normalBanner(res.data.result.result.list)
	// 				clearInterval(timer)
	// 			}
	// 		},500)
			
	// 	})
	// }
	// getBanner()
	// var template='{{#list}}'+'<div class="banner"><a href={{url}}><img src={{pic}}></a></div>'+'{{/list}}'
	// var timer = setInterval(()=>{
	// 		if(banner.length != 0){
	// 		var result = alt.renderHtml(template,{list:banner})
	// 		const loop=document.getElementById('loop')
	// 		loop.innerHTML=result
	// 		clearInterval(timer)
	// 	}
	// },300)

	// var loop=document.getElementById('loop')
	// loop.onmouseover = function(){
	// 	loop.style['-webkit-animation-play-state']='paused'
	// }
	// loop.onmouseout = function(){
	// 	loop.style['-webkit-animation-play-state']='running'
	// }
	// var cookbook = document.getElementById('cookbook')
	// var aside = document.getElementById('aside')
	// cookbook.onmouseover = function(event){
	// 	if(event.target.id=='hot'||event.target.id=='expert'||event.target.id=='search_cook'){
	// 		aside.style.display='block'
	// 	}
	// 	switch(event.target.id){
	// 		case 'hot':
	// 			aside.innerHTML=`<a href=''>鱼香肉丝</a><a class='link' href=''>宫保鸡丁</a>
	// 			<a class='link' href=''>油焖茄子</a><a class='link' href=''>水煮肉片</a>
	// 			<a class='link' href=''>酸辣土豆丝</a><a class='link' href=''>糖醋里脊</a>
	// 			<a class='link' href=''>番茄炒蛋</a><a class='link' href=''>红烧肉</a>
	// 			<a class='link' href=''>辣子鸡</a><a class='link' href=''>洋葱炒肉</a>
	// 			<a class='link' href=''>水煮鱼</a><a class='link' href=''>酸菜鱼</a>`
	// 			break
	// 		case 'expert':
	// 			aside.innerHTML=`<a href=''>功效</a><a class='link' href=''>减肥</a>
	// 			<a class='link' href=''>瘦身</a><a class='link' href=''>消脂</a>
	// 			<a class='link' href=''>丰胸</a><a class='link' href=''>美容</a>
	// 			<a class='link' href=''>养颜</a><a class='link' href=''>美白</a>
	// 			<a class='link' href=''>防晒</a><a class='link' href=''>排毒</a>
	// 			<a class='link' href=''>祛痘</a><a class='link' href=''>祛斑</a>
	// 			<a class='link' href=''>保湿</a><a class='link' href=''>补水</a>
	// 			<a class='link' href=''>更多</a>`
	// 	}
	// }
	// cookbook.onmousemove = function(event){
	// 	if(event.target.id=='cookbook'){
	// 		aside.style.display='none'
	// 	}
	// }
	// aside.onmouseleave=function(){
	// 	aside.style.display='none'
	// }


}