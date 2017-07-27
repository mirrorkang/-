Zepto(function($){
//	alert(1)
	//主页设置
	$('nav .fa-bars').tap(function(){
		$('#homeSetting').show()
	})
	$('#home').swipeLeft(function(){
		$('#homeSetting').hide()
	})
	
	
//	朋友圈长按关注
	$('#home article a').longTap(function(){
			$(this).attr('href','javascript:;');
			$(this).siblings('aside').show();
		
	})
	//右滑消失
	$('#home  article aside').swipeRight(function(){
			
			$(this).siblings('aside').hide();
		
	})
})