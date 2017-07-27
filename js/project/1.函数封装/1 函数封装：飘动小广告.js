//封装函数:飘动小广告
	
	//注意:
	//注意加载顺序，是否有必要window.onload=function(){}
	//1.小广告移动的范围默认窗口大小，如无需相对于屏幕大小运动，请替换window.innerWidth，window.innerHeight
	//2.窗口有默认margin,视觉上不到边：
	//为了视觉效果更佳,可将判断条件中'x>=h','x<=0','y>=w','y<=0',改为'x>h','x<0','y>w','y<0'
	//3.intervalTime设置在20-200，效果较佳；
	//4.广告图片可通过CSS元素背景图片实现
	function flyAds(adsId,adsCloseId, intervalTime){
		var ads=document.getElementById(adsId)
		var adsClose=document.getElementById(adsCloseId)
		
		var h=window.innerWidth - ads.offsetWidth;
		var w=window.innerHeight - ads.offsetHeight;
	
	//借用offsetLeft、offsetTop获取left，top值，无单位px,方便运算
		var x= ads.offsetLeft;//系统自动获取x,y初始值
		var y= ads.offsetTop;
		
		var i=1,j=1
		function move(){
			
			
		//临界条件，仅在满足条件时执行;
			if(x>=h){i=-1} //此处花括号可省略. if后不加花括号，仅执行第一条语句
		//临界条件，仅在满足条件时执行
			if(x<=0){i=1} //当x=0时，left=0,但body,默认有padding,视觉上不到边
		//临界条件，仅在满足条件时执行
			if(y>=w){j=-1} 
		//临界条件，仅在满足条件时执行
			if(y<=0){j=1}
			
			x+=i;y+=j;
			ads.style.left=x+'px';
			ads.style.top=y+'px';
		}
	//执行函数并命名	
		autoMove=setInterval(move,intervalTime);
		
	//鼠标移进、移出
		ads.onmouseover=function(){
			clearInterval(autoMove);//鼠标移进，清除所有‘autoMove’的间隔
			}
		ads.onmouseout=function(){
			autoMove=setInterval(move,intervalTime);
		}
		adsClose.onclick=function(){
			ads.style.display='none'
		}
	}