
$(document).ready(function(){
	//产品分类介绍
	$('.tab_intro dt').click(function(){
		var i=$(this).index();
		$(this).css('background','#6D84B4').siblings('dt').css('background','')
		$('.tab_intro dd').eq(i).css('display','block').siblings('dd').css('display','none')
	})
	//颜色选择
	$('.clth_color img').click(function(){
		var j=$(this).index();
		$('.color span').html($(this).attr('alt'));
		$('.colors div').css('display','none');
		$(this).css('border','1px solid red').siblings().css('border','1px solid #BBB');
		
		$('.imgs .mid_pic').eq(j).css('display','block').siblings('.mid_pic').css('display','none')
		$('.smlImg div').eq(j).css('display','block').siblings().css('display','none')
	})
	//颜色选择 结束
	
	//衣服细节 展示   随颜色变化
		$('.smlImg img').click(function(){
			var m=$(this).parents('.smlImg div').index();//第几组颜色
			var n=$(this).index();//第几个细节图
			//显示当前颜色组
			$('.colors div').eq(m).css('display','block').siblings().css('display','none');
			//显示当前颜色组
			$('.colors div').eq(m).children().eq(n).css('display','block').siblings().css('display','none')//显示当前点击的颜色
		})
	
	//衣服细节 展示  结束
	
	//尺寸选择
	$('.size li').click(function(){
		$(this).css('backgroundColor','#f60');
		$(this).siblings().css('backgroundColor','');
		$('.size span').html($(this).html())
	})
	//尺寸选择 结束
	
	
	//数量选择
		//设置默认总计金额=单价*数量默认值1
	$('.sumMoney span').text($('.mount select').val()*$('.price span').text())
		//总计随价格变化
	$('.mount select').change(function(){
		var num=$(this).val();
		var price=$('.price span').text();
	
		$('.sumMoney span').text(num*price)
	})
	//数量选择 结束
	
	//评分
	//评分  结束
	
	//加入购物车
	$('.cart').click(function(){
		var product=$('.pro_title').text();
		var pro_size=$('.shop_infor .size span').text();
		var pro_color=$('.shop_infor .color span').text();
		var pro_mount=$('.shop_infor select').val();
		var pro_sumMoney=$('.shop_infor .sumMoney span').text()
		var cartTxt='您选购的产品如下：<br />'
						+product+'&nbsp;'
						+'尺寸:'+pro_size
						+'；  颜色:'+pro_color
						+'；  数量:'+pro_mount+'件<br />'
						+'总   价:'+pro_sumMoney+'元'
						
						
		$('.cartTip').css('display','block')
		$('.orderInfo_cont').html(cartTxt)
	})
	$('.closeTip').click(function(){
		$('.cartTip').css('display','none')
	})
})