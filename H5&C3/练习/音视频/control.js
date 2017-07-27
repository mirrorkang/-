window.onload=function(){
	var video=document.getElementsByTagName('video')[0]
	var play=document.getElementById('play');
	var full=document.getElementById('full');
	var pause=document.getElementById('pause');
	var normal=document.getElementById('normal');
	var val=document.getElementById('val');
	play.onclick=function(){
		if(video.paused){//paused暂停了的   pause()方法的属性
			video.play();
			this.innerHTML='暂停'
			
		}else{
			
			video.pause();
			this.innerHTML='播放'
		}
		
	}
	full.onclick=function(){//全屏
		video.width=635
	}
	normal.onclick=function(){
		video.width=300
	}
	val.onchange=function(){//音量控制
		video.volume=val.value
	}
}