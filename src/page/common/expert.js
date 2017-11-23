/*
* @Author: tuguilin
* @Date:   2017-11-20 16:44:31
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-23 09:23:00
*/

require('./expert.css')
var api = require('util/api.js')
var normalBanner = require('util/banner.js')
var cooklist=[]
var expert = {
	getdata :function(){
		for(var index = 2;index < 12;index++){
			(function(index){
				var data={
					'classid':index,
					'start':0,
					'num':8,
					'appkey':'a463821a7f0fe98dbc3da2055678d238'

				}
				api._getJson(data).then((res)=>{
					const timer=setInterval(()=>{
						if(res.data.code==10000){
							cooklist[index-2]=normalBanner(res.data.result.result.list)
							clearInterval(timer)
						}
					},500)

				})
			})(index)
		}
		
	},
	addHtml:function(){
		this.getdata()
		var timer = setInterval(()=>{
			if(cooklist.length == 10){
				// var result = api.renderHtml(cookhtml,{list1:cooklist})
				var cook=document.getElementById('cook')
				var i=0
				for (let cooks of cooklist){
					
					if(cooks){
						cook.innerHTML=cook.innerHTML + `<div class="cookdetail"><div class="cookhead"><span>${api.expertdetail[i]}</span><span>更多》》</span></div><div class="cookimg" id="cookimg${i}"></div></div>`
						let cookimg = document.getElementById(`cookimg${i}`)
						for(let cookdetail of cooks){
							cookimg.innerHTML=cookimg.innerHTML+`<div><a href=${cookdetail.url}><img src=${cookdetail.pic}></a><span class="cookname">${cookdetail.name}</span><span>${cookdetail.tag}</span></div>`
						}
					}
					
					i++
				}
				clearInterval(timer)

			}
		},500)
		
	},
	init:function(){
		this.addHtml()
	}
}


module.exports=expert.init()

	
