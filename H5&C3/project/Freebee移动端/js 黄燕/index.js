
	Zepto(function($){
		//底部按钮点击变色
 		$("footer a").tap(function(){
 			$(this).css('color','#f17e56').siblings().css('color','#958f88');
 		})
 		
 		//区域左滑显示菜单
 		$('section').swipeLeft(function(){
 			$(this).children('.aside').animate({left:'6.2rem'},500);
 		})
 		
 		$('section').swipeRight(function(){
 			$(this).children('.aside').animate({left:'7.3rem'},500);
 		})
 		
 		
 		//header点击侧滑
 		$('header>a').tap(function(){
 			$('header>a span').hide();
 			$('.person').animate({left:0},500);
 			$('header').animate({top:".6rem",left:"5.8rem"},500);
 			$('footer').animate({bottom:"-.6rem",left:"5.8rem"},500)
 			$('.index').animate({marginTop:".6rem",marginLeft:"5.8rem"},500);
 			$('body').css('overflow','hidden');
			$('.meng').css('z-index',2);
 		})

		$('.meng').tap(function(){
			$('.person').animate({left:"-5.8rem"},500);
			$('header').animate({top:0,left:0},500);
			$('footer').animate({bottom:0,left:0},500)
			$('.index').animate({marginTop:0,marginLeft:0},500);
			$('body').css('overflow','auto');
			$(this).css('z-index',-1);
		})

 		
 		//侧滑设置菜单
 		$('li').tap(function(){
 		
 			$(this).css("background-color","#776f66").siblings().css("background-color","transparent")
 		})
 		
 		//侧滑切换账号
 		var num=$('figure').size();
 		var i=0;
 		var w=2.48;
 		$('.news>div').width(w*num+"rem");
 		$('figure').swipeLeft(function(){
 			
 			var i=$(this).index();
 			if(i>num-2){return}
 			$('.news>div').animate({left:-w*(i+1)+'rem'},500);
 			$('.news>p span').eq(i+1).css('background','white').siblings().css('background','#534c44');
 		})
 		
 		$('figure').swipeRight(function(){
 			var i=$(this).index();
 			if(i<1){return}
 			$('.news>div').animate({left:-w*(i-1)+'rem'},500);
 			$('.news>p span').eq(i-1).css('background','white').siblings().css('background','#534c44');
 		})
 		
 		
 		
 		//存储本地信息
 		$('section>a').tap(function(){
 			var username=$(this).children('.desc').children('h5').html();
 			var add=$(this).find('p').children('span').html();
 			var str=$(this).children('.icon').css('background-image');
			var str1=$(this).parent('section').css('background-image');
 			var arr=new Array();
			var arr1=new Array();
 			arr=str.split('/');
			arr1=str1.split('/');
 			var src=arr[arr.length-1].replace('")','');
			var bgsrc=arr1[arr1.length-1].replace('")','');
 			localStorage.setItem('name',username);
 			localStorage.setItem('adress',add);
 			localStorage.setItem('imgSrc',src);
			localStorage.setItem('bgSrc',bgsrc);
 		})
 		
	})

