window.onload = function(){
	
	
	
	var speed=50; //设置向上滚动速度
 
   function moveTop(){
   	var demo = document.getElementById("dome");
	var demo1 = document.getElementById("dome1");
	var demo2 = document.getElementById("dome2");
//	  demo2.innerHTML=demo2.innerHTML //复制dome1为dome2
	demo2.innerHTML = demo1.innerHTML;
   if(demo2.offsetTop-demo.scrollTop<=0)   //当滚动至dome1与dome2交界时
  // dome.scrollTop-=dome1.offsetHeight      //dome跳到最顶端
   demo.innerHTML='<div>'+demo1.innerHTML+'</div>'+demo.innerHTML;
   
   else{
   demo.scrollTop++;
   
   }
   }
   var MyMar=setInterval(moveTop,speed) //设置定时器
   demo.onmouseover=function() {clearInterval(MyMar)}//鼠标移上时清除定时器达到滚动停止的目的
   demo.onmouseout=function() {MyMar=setInterval(moveTop,speed)}
	
}
