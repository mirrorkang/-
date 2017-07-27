/**
		 * 放大镜
		 * divId:图片所在盒子id
		 * imgTag：图片的标签img
		 * oDivW：移动模块的宽度(可选)
		 * oDivH：移动模块的高度(可选)
		 * newSrc：高清晰图片路径(可选)
		 * 
		 *使用方式：
		 * <div id="box">
		 *	<img src="1.jpg"/>
		 *</div>
		 *调用：magnify('box','img');
		 */
		function magnify(divId,imgTag,oDivW,oDivH,newSrc){
		//==============获取主容器=================//
		var oBox = document.getElementById(divId);
		//==============获取图片==================//
		var oImg = oBox.getElementsByTagName(imgTag)[0];
		//人工设置图片的大小
		
		//图片的宽度
		var oImgW = oImg.offsetWidth;
		//图片的高度
		var oImgH = oImg.offsetHeight;
		//设置主容器的宽度
		oBox.style.width = oImgW + 'px';
		//设置主容器的高度
		oBox.style.height = oImgH + 'px';
		//设置主容器相对页面的设置
		oBox.style.position = 'relative';
		//主容器到左邊的距離
		var oBoxL = oBox.offsetLeft;
		//主容器到上邊的距離
		var oBoxT = oBox.offsetTop;
		//主容器的寬度
		var oBoxW = oBox.offsetWidth;
		//主容器的高度
		var oBoxH = oBox.offsetHeight;
		
		//================创建移动模块================//
		var oDiv = document.createElement('div');
		//移动模块的宽度
		if(oDivW == ''){this.oDivW = 100;}else{this.oDivW = oDivW}
		oDiv.style.width = this.oDivW+'px';
		//移动模块的高度
		if(oDivH == ''){this.oDivH = 100;}else{this.oDivH = oDivH}
		oDiv.style.height = this.oDivH+'px';
		//移动模块相对主容器的位置
		oDiv.style.position = 'absolute';
		oDiv.style.left = '0px';
		oDiv.style.top = '0px';
		//移动模块的背景色
		oDiv.style.background = 'rgba(0,0,0,.4)';
		//移动模块追加到主容器中
		oBox.appendChild(oDiv);
		
		//===============放大盒子的属性===============//
		var oShow = document.createElement('div');
			oShow.id = 'show';
			oShow.style.width = oBoxW + 'px';
			oShow.style.height = oBoxH + 'px';
			oShow.style.position = 'absolute';
			oShow.style.overflow = 'hidden';
			oShow.style.margin = '0 auto';
			oShow.style.left = oBoxL+oBoxW+20+'px';
			oShow.style.top = oBoxT+'px';
			document.getElementsByTagName('body')[0].appendChild(oShow);
			
			

		/*设置倍率*/
		var a = oShow.offsetWidth/oDiv.offsetWidth;
		var b = oShow.offsetHeight/oDiv.offsetHeight;
		
		//放大盒子图片的属性
		var sImg = document.createElement('img');
			//图片复制
			if(newSrc == null)
			{
				sImg.src = oImg.getAttribute('src');
			}else{
				sImg.src = newSrc;
			}

			sImg.style.width = a*oImg.offsetWidth+'px';
			sImg.style.height = b*oImg.offsetHeight+'px';
			sImg.style.position = 'absolute';
			sImg.style.left = '0px';
			sImg.style.top = '0px';
			oShow.appendChild(sImg);
		
		
		//鼠標進入盒子,移動模塊可見
		oBox.onmouseover = function(){
			oDiv.style.display = 'block';
			oShow.style.display = 'block'
		}
		//鼠標離開盒子,移動模塊隱藏
		oBox.onmouseout = function(){
			oDiv.style.display = 'none';
			oShow.style.display = 'none';
		}
		
		//=============注意================//
		//之所以把隐藏放在这里的原因是方便上面倍率的计算
		//移动模块隐藏
		oDiv.style.display = 'none';
		//放大盒子隐藏
		oShow.style.display = 'none';
		
		
		//鼠標在盒子移動,移動模塊綁定到鼠標上
		oBox.onmousemove = function(e){
			oBox.style.cursor = 'crosshair';
			//x表示移动模块的x轴距离
			var x = e.pageX - oBoxL - oDiv.offsetWidth/2;
			//y表示移动模块的y轴距离
			var y = e.pageY - oBoxT - oDiv.offsetHeight/2;
			
			//移动模块的临界判断
			if(x<0){x=0;}
			if(x>(oBoxW - oDiv.offsetWidth)){x = oBoxW - oDiv.offsetWidth;}
			if(y<0){y=0;}
			if(y>(oBoxH - oDiv.offsetHeight)){y = oBoxH - oDiv.offsetHeight;}
			
			//移动模块的移动
			oDiv.style.left = x + 'px';
			oDiv.style.top = y +'px';
			
			//移动距离的倍率计算
			var c = x/(oBoxW - oDiv.offsetWidth);
			var d = y/(oBoxH - oDiv.offsetHeight);
			
			//放大圖片的移動
			sImg.style.left = -c*(sImg.offsetWidth - sImg.parentNode.offsetWidth) + 'px';
			sImg.style.top = -d*(sImg.offsetHeight - sImg.parentNode.offsetHeight) + 'px';
		}
		}