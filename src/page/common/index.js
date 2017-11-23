/*
* @Author: tuguilin
* @Date:   2017-11-17 17:33:10
* @Last Modified by:   tuguilin
* @Last Modified time: 2017-11-23 09:55:27
*/
require('./layout.css');
require('./nav.css');

var login1 = document.getElementById('login');
var shade_isshow = document.getElementById('shade');
var cancel = document.getElementById('cancel');
login1.onclick = function(){
	shade_isshow.style.display = 'block';
};
cancel.onclick = function(){
	shade_isshow.style.display = 'none';
}

var search_value = document.getElementById('search_value')
var search = document.getElementById('search')
console.log(search)
if(search != null){
	search.onclick=function(){
		if(search_value.value===''){
			alert('请输入想要查找的菜谱')
		}
		else{
			window.location.href=`./searchdetail.html?keyword=${search_value.value}`
		}
	}
}
	

var btn2=document.getElementById('btn2')
var search_box = document.getElementById('search_box')
btn2.onclick=function(){
	btn2.className='btn2'
	search_box.style.display='block'
	btn2.onclick=function(){
	if(search_box.value===''){
		alert('请输入想要查找的菜谱')
	}
	else{
		window.location.href=`./searchdetail.html?keyword=${search_box.value}`
	}
}
}