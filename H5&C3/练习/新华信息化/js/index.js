//显示更多消息
$(document).ready(function(){
	$('button').click(function(){
		$('ul.content li:gt(2)').toggle();
//		$('ul.content li:gt(2)').slideToggle()
	})


})