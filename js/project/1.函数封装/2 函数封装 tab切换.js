
function  Tab(control,controlTag,show,showEach){
	var controlnum =document.getElementById(control).getElementsByTagName(controlTag)
	//controlnum为数组
	var showEach =document.getElementById(show).getElementsByTagName(showEach)
	//showEach为数组
	for(var i=0;i<controlnum.length;i++){
		controlnum[i].onmouseover=function(){
		//通过if……else的else隐藏其他同层元素；否则，条件为成立时，直接设置this的属性，无法取消其他元素的属性
			for(var j=0;j<controlnum.length;j++){
				if(this==controlnum[j]){
					controlnum[j].className='isControl'
					showEach[j].style.display='block';
				}else{
				controlnum[j].className='notControl'
				showEach[j].style.display='none';
				}
			}
			
		}
	}
}
