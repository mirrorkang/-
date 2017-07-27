//图片自动轮播
function scroll_images(){
	var img=document.getElementsByClassName('scroll_mid')[0].getElementsByTagName('img')[0];
	var nums=document.getElementById("scroll_number").getElementsByTagName('li');
	var i=0;
	function auto(){
		i++;
		if(i>=nums.length){
			i=0;
		}
		for(var j=0;j<nums.length;j++){
			nums[j].style.backgroundColor=''
		}
		m=nums[i].innerHTML
		nums[i].style.backgroundColor='orange';
		img.src='images/dd_scroll_'+m+'.jpg'
	}
	setInterval(auto,1000)
}
//最新上架版块TAB切换效果
function newbks(){
	var  newbksCtrl=document.getElementsByClassName('book_type');
	var newbk1=document.getElementById("newbk").getElementsByTagName('dl');
	//var  newbksDetail=document.getElementById('newbks_class').getElementsByTagName('dl');
	for(var i=0;i< newbksCtrl.length;i++){
		 newbksCtrl[i].onmouseover=function(){
		 	for(var j=0;j<newbksCtrl.length;j++){
		 		if(this==newbksCtrl[j]){
		 			newbksCtrl[j].style.backgroundImage='url(images/dd_book_bg2.jpg)';
		 			 newbk1[j].style.display='block';
		 		}else{
		 			newbksCtrl[j].style.backgroundImage="url(images/dd_book_bg1.jpg)";
		 			//newbksCtrl[j].color='gray';
		 			newbk1[j].style.display='none';
		 		}
		 	}
		 }
	}
}

//广告飘动
function adsFly(){
	var ads=document.getElementById("right");
	var closeAds=document.getElementById("dd_close")
	var h=window.innerHeight-ads.offsetHeight;
	var w=window.innerWidth-ads.offsetWidth;
	
	var x=ads.offsetLeft;
	var y=ads.offsetTop;
	var i=1;
	var j=1;
	function ads1(){
		if(x>w){i=-1};
		if(x<0){i=1};
		if(y>h){j=-1};
		if(y<0){j=1}
		x+=i;y+=j;
		ads.style.left=x+'px';
		ads.style.top=y+'px';
		
	}
	time=setInterval(ads1,20)
	ads.onmouseover=function(){
		clearInterval(time);
	}
	closeAds.onclick=function(){
		clearInterval(time);
		ads.style.display='none'
	}
}

//书讯快递
function scroll_news(){
	var dome=document.getElementById("dome");
	var news=document.getElementById("express");
	var z=0
	
	function move(){
		
		z--;
		if(-z>=dome.offsetHeight){z=0}
		news.style.marginTop=z+'px';

	}
	time1=setInterval(move,100);
	dome.onmouseover=function(){
		clearInterval(time1)
	}
}
window.onload=function(){
	scroll_images();
	newbks();
	 adsFly();
	 scroll_news();
	
}
