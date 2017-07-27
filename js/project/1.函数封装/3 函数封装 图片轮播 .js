		
function change(control,controlNumTag,show,showEach,time){
	var controlnum=document.getElementById(control).getElementsByTagName(controlNumTag);
	var showEach =document.getElementById(show).getElementsByTagName(showEach)
	var i=0;
	setInterval(function(){	
			i++;
			//轮播完后，回到最初位置
			if(i>showEach.length-1){
				i=0
			}
			//设置所有对象不显示			
			for(var j=0;j<controlnum.length;j++){
				showEach[j].style.display='none';
				controlnum[j].className='notControl';
			}
			//当前i显示
				showEach[i].style.display='block';
				controlnum[i].className='isControl';
	},time)
}
			
	
