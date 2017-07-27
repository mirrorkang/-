Zepto(function($){
		//底部按钮点击变色
 		$("footer a").tap(function(){
 			$(this).css('color','#f17e56').siblings().css('color','#958f88');
 		})
 		
 		
 		//获取主页存储信息
 		var username=localStorage.getItem('name');
 		var add=localStorage.getItem('adress');
 		var src=localStorage.getItem('imgSrc');
		var bgsrc=localStorage.getItem('bgSrc');
 		src='url(images/'+src+')';
		bgsrc='url(images/'+bgsrc+')';
 		$('.wrap div>span').css('background-image',src);
 		$('.wrap h5').html(username);
 		$('.wrap p span').html(add);
 		$('.main section>div').css('background-image',bgsrc);
 		
 		//个人信息左滑右滑事件
 		var num=$('.wrap div').size();
 		var w=7.3;
 		var i=0;
 		$('section div').swipeLeft(function(){
 			i=$(this).index();
 			if(i>=num-1){return;}
 			$('.wrap').animate({'margin-left':-w*(i+1)+'rem'},500);
 			$('.wrap').next().children('span').eq(i+1).css('background','white').siblings().css('background','#4d464d')
 		})
 		
 		$('section div').swipeRight(function(){
 			i=$(this).index();
 			if(i<=0){return;}
 			$('.wrap').animate({'margin-left':-w*(i-1)+'rem'},500);
 			$('.wrap').next().children('span').eq(i-1).css('background','white').siblings().css('background','#4d464d')
 		})
})