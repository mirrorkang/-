$(document).ready(function(){
//图片切换


//图片切换 结束
	
	
//	评分
	$('.rating li').click(function(){
		var starNum=$(this).index()+1;
		switch(starNum){
			case 1:
			$('.rating').removeClass().addClass("rating "+'onestar');
			break;
			case 2:
			$('.rating').removeClass().addClass("rating "+'twostar');
			break;
			case 3:
			$('.rating').removeClass().addClass("rating "+'threestar');
			break;
			case 4:
			$('.rating').removeClass().addClass("rating "+'fourstar');
			break;
			case 5:
			$('.rating').removeClass().addClass("rating "+'fivestar');
			break;
		}
		
		alert('您的评分是：'+starNum+'颗星')
	})

//	评分 结束	
})