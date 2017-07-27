$(document).ready(function(){
	
	//界面皮肤变化 
	$('.navColor li').click(function(){
		var num=$(this).index();
		switch(num){
			case 0:
			$('#mainNav').css('backgroundColor','#4A4A4A');
			$('#main-left h5').css('backgroundColor',' #6E6E6E');
			break;
			case 1:
			$('#mainNav').css('backgroundColor','  #B1D410');
			$('#main-left h5').css('backgroundColor',' #CDE074');
			break;
			
			case 2:
			$('#mainNav').css('backgroundColor','#F9AF2A');
			$('#main-left h5').css('backgroundColor','#FFCF78');
			break;
			case 3:
			$('#mainNav').css('backgroundColor',' #37C7D4');
			$('#main-left h5').css('backgroundColor',' #98E0E6');
			break;
			
			case 4:
			$('#mainNav').css('backgroundColor','  #E44072');
			$('#main-left h5').css('backgroundColor','  #F296B2');
			break;
			
			case 5:
			$('#mainNav').css('backgroundColor',' #BE46D8');
			$('#main-left h5').css('backgroundColor',' #D49AE1');
			break;
			
		}
		
	})
	
	
	
})