/*
* @Author: tuguilin
* @Date:   2017-11-19 10:06:36
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-22 10:33:46
*/
class banner{
	constructor({pic,url,name,tag,classid}){
		this.pic = pic,
		this.url = url,
		this.name = name,
		this.tag = tag,
		this.classid = classid
	}
}

var creatBanner = function (list) {
	return new banner({
		pic:list.pic,
		url:`./cookdetail.html?id=${list.id}`,
		name:list.name,
		tag:list.tag,
		classid:list.classid
	})
}

var normalBanner = function(list=[]){
		const banner1=[];
		if(list.length != 0){
			list.forEach((item)=>{
				banner1.push(creatBanner(item))
			})
		}	
		return banner1

	}
module.exports=normalBanner