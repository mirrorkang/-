
//中间上面图片  切换、轮播
function midTopScrollimages(){
	var images=document.getElementsByClassName('mid-top-scrollimages')[0].getElementsByTagName('img')
	var nums=document.getElementsByClassName('nums')[0].getElementsByTagName('a');
	var i=0;
	
	//自动轮播
	function auto(){
		i++;
		if(i>=nums.length){
			i=0;
		}
		for(var j=0;j<nums.length;j++){
			nums[j].style.backgroundColor='';
		}
		var m=nums[i].innerHTML
		images[0].src='images/dd_scroll_'+m+'.jpg';
		
		nums[i].style.backgroundColor='#F96';
		
		
	}
	var time=setInterval(auto,1000)
	
	//切换
	for(j=0;j<nums.length;j++){
		var m='';
		
		nums[j].onmouseover=function(){
			
			for(var k=0;k<nums.length;k++){
			nums[k].style.backgroundColor='';
			}
			clearInterval(time);
			m=this.innerHTML;
			images[0].src='images/dd_scroll_'+m+'.jpg';
			i=this.innerHTML-1;
			
		}
		nums[j].onmouseout=function(){
			time=setInterval(auto,1000);
			
			
		}
	}
}

//最新上架
function newbks(){
	var nbks=document.getElementsByClassName('mid-midfirstline')[0].getElementsByTagName('li');
	var nbksDetail=document.getElementsByClassName('mid-mid-newbooks')[0].getElementsByTagName('div');
	for(var i=0;i<nbks.length;i++){
		nbks[i].onmouseover=function(){
			for(var j=0;j<nbks.length;j++){
				if(this==nbks[j]){
					nbksDetail[j].style.display='block';
				}else{
					nbksDetail[j].style.display='none';
				}
			}
		}
	}
}
//书讯快递
function news(){
	var box=document.getElementById('box');
	var news=document.getElementsByClassName('ul1')[0];
	var cl_ul=document.getElementById("cl_ul");
	cl_ul.innerHTML=news.innerHTML
	var z=0;
	 function move(){
	 	z--;
	 	if(-z>=box.offsetHeight){z=1};
	 	news.style.marginTop=z+'px';
	 }
	time= setInterval(move,100);
	box.onmouseover=function(){
		clearInterval(time);
	}
	box.onmouseout=function(){
		time= setInterval(move,50);
	}
}


window.onload=function(){
	 midTopScrollimages();
	 news()
	 newbks();
	
}
