window.onload=function(){
	var images=document.getElementsByClassName('mid-top-scrollimages')[0].getElementsByTagName('img')
	var nums=document.getElementsByClassName('nums')[0].getElementsByTagName('a')
	
	for(j=0;j<nums.length;j++){
		
		nums[j].onmouseover=function(){
			
			for(var k=1;k<nums.length;k++){
				if(k==this.innerHTML*1){
					images[k].style.display='block';
					
				}else{
					images[k].style.display='none';
				}
			}
			
					
		}
		
	}
}
