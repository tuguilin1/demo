/*
* @Author: tuguilin
* @Date:   2017-11-22 10:10:14
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-22 13:47:27
*/
require('./index.css')
var api=require('util/api.js')


window.onload = ()=>{
	var id = api._getUrlParam('id')
	var cookdetail=[]
	var getcookdetail=function(){
		var data={
			'id':id,
			'appkey':'a463821a7f0fe98dbc3da2055678d238'
		}
		api._getcookdetail(data).then((res)=>{
			if(res.data.code=='10000'){
				cookdetail=res.data.result.result
			}
			console.log(cookdetail)
		})
	}
	getcookdetail()
	var cookhead = document.getElementById('cookhead')
	var material = document.getElementById('cook_material')
	var process1 = document.getElementById('process')
	var timer=setInterval(()=>{
		if(cookdetail.length!=0){
			cookhead.innerHTML=`<div>${cookdetail.name}</div><img src=${cookdetail.pic}><div>${cookdetail.content}</div>`
			var template='{{#list}}'+'<div><span>{{mname}}</span><span>{{amount}}</span></div>'+'{{/list}}'
			var result=api.renderHtml(template,{list:cookdetail.material})
			
			material.innerHTML=result
			var template2 = '{{#list1}}'+'<div class="material_process"><div><img src={{pic}}></div><div>{{pcontent}}</div></div>'+'{{/list1}}'
			var result2 = api.renderHtml(template2,{list1:cookdetail.process})
			process1.innerHTML=result2
			clearInterval(timer)
		}
	},300)
	
	
}
