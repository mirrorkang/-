$(document).ready(function(){
	//商品搜索
	$('#inputSearch').focus(function(){
		if($(this).val()=='请输入商品名称'){$(this).val('')}
	}).blur(function(){
		if($(this).val()==''){$(this).val('请输入商品名称')}
	}).keyup(function(e){
		if(e.keyCode==13){alert('回车提交搜索')}
	})
	//商品搜索 结束
	
	
	//	广告大图轮播
	var i=0
	function ads_change(){
		i++;
		if(i>$('#JS_imgWrap img').length-1){i=0}
		$('#JS_imgWrap img').eq(i).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()
		$('#JS_imgWrap').next('div').children().eq(i).css('background','lightblue').siblings().css('background','#444444')
	}
	time=setInterval(ads_change,1000)
	$('#JS_imgWrap').hover(function(){clearInterval(time)},function(){
		time=setInterval(ads_change,1000)
	})
	$('#JS_imgWrap').next('div').children().hover(function(){
		clearInterval(time);
		ads_change();
	},function(){
		i=$(this).index()-1;
		time=setInterval(ads_change,1000)
	})
	//	广告大图轮播 结束
})