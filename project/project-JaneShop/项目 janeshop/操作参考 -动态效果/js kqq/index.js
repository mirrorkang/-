$(document).ready(function(){
	
	//商品搜索
	$('#inputSearch').focus(function(){
		if($(this).val()=="请输入商品名称"){
			$(this).val('')
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val('请输入商品名称')
		}
	}).keyup(function(e){
		console.log(e)
		if(e.keyCode==13){ //e.key=='Enter'
			alert('回车提交搜索')
		}
	})
	
	//商品搜索 结束
	 
	// 换主题颜色
	$('#skin li').click(function(){
		var navColor=['#4A4A4A',' #BE46D8','#E44072', '#37C7D4','#F9AF2A',' #B1D410'];
		var sortsColor=['#6E6E6E',' #D49AE1','#F296B2','#98E0E6',' #FFCF78','#CDE074'];
		var i=$(this).index();
		$(this).addClass('selected').siblings().removeClass();
		$('#nav').css('background-color',navColor[i])
		$('#jnCatalog h2').css('background-color',sortsColor[i])
		
		
	})
	//换主题颜色 结束
	
	//大图切换
		var i=0;
	function adsChange(){
		i++;
		if(i>$('#JS_imgWrap img').length-1){i=0}
		//stop(true,true)停止所有动画，允许正在执行的动画执行完毕；
		//stop(true)停止所有动画，正在执行的动画暂停
		$('#JS_imgWrap img').eq(i).stop(true,true).fadeIn(700).siblings().stop(true,true).fadeOut(700)
		$('#jnImageroll_ctrl a').eq(i).css('background-color','#37A7D7').siblings().css('background-color','#444444')
	}
	adsTime=setInterval(adsChange,2000);
	$('#jnImageroll_ctrl a').hover(function(){
		clearInterval(adsTime);
		i=$(this).index()-1;//函数中自带加1
		adsChange();
	},function(){
		adsTime=setInterval(adsChange,2000);
	})
	//大图切换 结束
	//	品牌活动切换 待
	$('#jnBrandTab ul li').click(function(){
		var j=$(this).index();
		var w=$('#jnBrandList li').outerWidth(); //196
		
	//	$('#jnBrandList').css('left',-196*4*j+'px');
		$('#jnBrandList').animate({ left :parseInt( -w*4*j)},1000)
	})
	//	品牌活动切换 结束
})