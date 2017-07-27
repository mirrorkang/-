jQuery的优势：http://jquery.com
	强大的选择器
	出色的浏览器兼容
	强大的DOM封装
	可靠的事件处理机制
	简化流程：隐式迭代（自动遍历符合条件的对象）
	占用内存小（压缩后100KB左右）
	丰富的插件支持
	
jQuery语法结构
	$(selector).action()
	//$ 等同于 jQuery
		eg:$(document).ready() 等同于 jQuery(document).ready()

	//工厂函数$():将 DOM对象 转化为 jQuery对象
jquery使用优化
	1.减少对dom的查找
	使用尽量少的选择器
		$('form input#username') 优化为 $('#username')
	尽量少的查找dom
		var elem =$('#div1')
		elem.css({})
	链式操作
		$('#div1').css({}).html().fadeout()
	2.减少对dom的操作
		var newLi='';
		$.each(arr,function(index,value){
			newLi+="<li id="+index+'>'+value+'<li/>' //减少添加次数
		})
		$('ul').append(newLi)
		
	3.同一元素的多事件绑定
		3.1多事件连写
		var btn =$('.btn');
		btn.on({
			'mouseenter':function(){
				$(this).html('enter')
			},
			'click':function(){
				$(this).html('click')
			}
		 })
		 3.2监听父元素  提高性能
		 var list1=$('.list1');
		 list1.on('click','li'.function(){
			 
		 })
		 list1.on('mouseenter','li'.function(){
			 
		 })
window.$ 简写为$	
		jquery所有方法均在window.$下
		
		
window.onload与$(document).ready()的区别
	window.onload：
		1.在网页所有内容加载完毕后执行（含图片，flash，视频等）	
		2.同一页面只能存在一个window.onload
	$(document).ready()
		1.网页所有DOM文档结构加载完执行（可能与DOM元素关联的内容并没有加载完）
		2.同一页面可存在多个$(document).ready()
		3.直接执行方式：$(function(){})

DOM对象与JQuery对象相互转化
	JQuery 转化为 DOM 
		1.[index]形式转化
			var txtName  = $('txtName')[0]  
		2.get(index)
			var txtName  = $('txtName').get(0)
	 DOM 转化为 JQuery
		给元素外加 $();
		1.$( document.getElementById("txtName"))
		2.定义变量
			var  txtName =   document.getElementById("txtName"); //DOM对象
			//var  $txtName =  $(txtName);   //jQuery对象

			

	
		
jQuery选择器 selector：
		1.选取所有符合条件的对象；
		2.遍历效果
		//特殊符号需转译  [  -->  \\[
		3.$('*') 选择所有
		4.$('#div','.class') //或者 符合任一条件都会被选中
	1.类css选择器
		基本选择器
			全局选择器 $('*')  选取所有元素
			
			标签选择器 $('h2')
			ID选择器   $('#idName')
			类选择器   $('.className')
			
			并集选择器 $('#idName,.className,h2')
			交集选择器 $('h2.box') class为box的h2元素
			
		层次选择器  //通过DOM元素之间的层次关系来获取元素
			后代选择器 $('ancestor descendant')选取所有后代子元素
			子选择器   $('parent>child')选取第一代子元素
			相邻元素选择器 $('pre+next') 紧邻其后的对应的同级元素
							对比: next() 紧邻其后的任意元素
			同级元素选择器 $('pre~siblings')'pre'的所有同辈元素
			
		属性选择器 //通过HTML元素的属性来选择元素
			具有某种属性   $('[属性名]')
			属性和值	   $('[属性名="属性值"]')
			属性和非指定值 $('[属性名！="属性值"]')
			指定值开始     $('[属性名^="属性值开始字符串"]')
			指定值结束     $('[属性名$="属性值结束字符串"]') $('[href$=".jpg"]')
			包含指定值     $('[属性名*="包含指定的字符串"]') 
			
			复合属性       $("li[id][value='提交']") 所有具有id属性 且 value为"提交"的li元素
			
			
	2.过滤选择器
		基本过滤选择器
			:first $('li:first') //所有选中元素的中的第一个
			:last  $('li:last')
			:even  $('li:even') 选取偶数（索引从0开始）
			:odd   $('li:odd') 选取基数（索引从0开始）
			
			//索引值
			:eq(index)   $('li:eq(0)')     //eq(index)既可以是选择器，也可以是方法
			:gt(index)   $('li:gt(0)') > ≠ //greater than
			:lt(index)   $('li:lt(2)') < ≠ //less than
			
			:not()       $('li:not(.box)')选取除class为box的所有li元素
						 $('li:not(ul li)') //not后面的东西不受限制
			:header所有标题元素 $(':header')
			:focus       $(':focus')获取当前焦点的元素
			
		可见性过滤选择器
			:visible 可见元素 $(':visisble')
			:hidden  隐藏元素 $(':hidden')
			
	3.表单选择器
			:input 所有表单元素，含<select>,<textarea>,<input>
			
			//type类型
			:text   :password   :radio   :checkbox   :image 
			:submit :reset
			:button 
			:file
			
			:checked  被选中的元素 单选框、复选框等 //不含<select>
			:selected <select>中被选中的<option>
			
			:input:disabled //不可编辑的表单元素
			:input:enabled //可编辑的表单元素
			
			
	4.内容过滤器
			:contains('')  $("div:contains('')")
			:has(选择器) 后代中包含指定元素的元素  $('li:has(a)')后代中包含a标签的li元素
					//has(选择器)也是一种方法 
			:empty 不包含子元素或文本的元素   $('div:empty')
					//empty()同时也是一种方法 
			:parent  可以作为父元素的元素//所有含有子元素或文本的元素

	5.子元素选择器
		:first-child //第一个子元素，不是父元素的第一个子元素的排除
		:last-child
		:nth-child()
			:nth-child(2) :nth-child(even) :nth-child(odd)
			:nth-child(2n)  //偶数  2的倍数 :nth-child(2n+1)
			:nth-child(3n)  //3的倍数 :nth-child(3n+1)
		:only-child //选择父元素只有一个子元素的元素
		
		:nth-of-type() //css3选择器  身为父元素的第二个元素的元素
----------------------------------------------------------------

DOM操作：
	1.DOM Core //任何一种支持DOM的编程语言都可以使用它，如getElementById()
	2.HTML-DOM //用于处理HTML文档，如document.forms
	3.CSS-DOM  //用于操作CSS，如element.style.color="green"
	
jQuery中的DOM操作:
	1.样式操作
	// jQuery样式设置 
		1.1.css样式
			获取css样式
				css('属性') //获取样式值
				css(['属性1','属性2']) //数组形式，得到的是json
					JSON.stringify(...)
			设置css样式
				css('属性','属性值') //设置style样式 
					$('.div1').css('font-size',function(index,oldvalue){
						alert(index+':'+oldvalue);
						return '40px';
					})
				css({'属性1'：'属性值1','属性2'：'属性值2'})//设置多个style样式
			
		1.3.class操作
			addclass
				 addClass("className") 
				 addClass("className1 className2 … ")//不用加'.'
			removeClass
				removeClass("className")
				removeClass("className className … ")
			hasClass('')  //  true/false
			toggleClass('') //增加或移除class
	
		1.4.内容及value值操作
			html()与 text()
				.html()
					.html() 获取所有内容，包含标签
					.html('html代码') 为元素添加innerHTML，可解析并执行其内代码
					.html(function(index,html){})//index所选元素的序号，html对应html()方法
						$('div').html(function(index,html){
							alert(index+':'+html)
						})
				.text()
					.text() 获取文本内容，剔除标签
					.text('')按原文本输出,不解析代码
			val()
				$('input').val();      // 获取value值
				$('input').val("值");  // 设置value值
		1.5.属性设置和获取
			$(selector).attr("属性");//获取属性值
			$(selector).attr({"属性1":"值1","属性2":"值2"});//设置多个属性  
			$(selector).attr("属性",'值')
				attr('style','backgroundColor:red') 
				attr('id','')
				attr('name','')
				attr('placeholder','')
				attr('type','') 
			
			移除属性
			removeAttr( "属性名称" )
	//js设置样式
		style.属性名=属性值
		setAttribute('type','text') //设置自带属性
			getAttribute('type') //获取属性值
	
	2.CSS-DOM操作
		2.1 height()
			//height()获取高度
			//height(20)设置高度为20
		2.2 width()
		
		2.3 offset() 返回top、left坐标（省略单位px）
			$("p").offset({top: 10,left:30});
			offset().left;
			offset().top
			//仅对可见元素有效,即 针对带有 top 和 left 属性的对象
	


	3.节点操作
		3.1.创建节点
			$(selector)查找节点 //通过选择器获取节点
			$(element) 把DOM节点转化成jQuery节点
			$(html)    使用HTML字符串创建jQuery节点
				//创建节点 var $newNode2=$(" <li title= '标题为千与千寻' >千与千寻</li> ");
		3.2.插入节点
			//内部添加
			$(A).append(B)    B追加到A中
			$(A).appendTo(B)  A追加到B中
			
			$(A).prepend(B)   B前置到A中
			$(A).prependTo(B) A前置到B中
			
			//同级添加
			$(A).after(B)        B插入至A后
			$(A).insertAfter(B)  A插入至B后
			
			$(A).before(B)       B插入至A前
			$(A).insertBefore(B) A插入至B前
			
			//外包节点wrap
			 $('li').wrapInner('<em><em>')//给li的innerHtml外包一个父元素
			 $('li').wrap('<ul><ul>')//给每个li外包一个ul
			 $('li').wrapAll('<ul><ul>')//所有选中元素外包一个ul
			 $('li').unwrap()//删除所需元素的公用父元素
		3.3.替换节点
			replaceWith()  replaceAll()
				$(A).replaceWith(B);//用B替换A整个节点
				$(B).replaceAll(A);
		3.4.复制节点 clone
			clone()    复制内容
			clone(true)复制内容及事件
				$("ul li:eq(1)").clone(true).appendTo("ul");
		3.5.删除节点
			empty() 清空节点内容 //无参数
			remove() 删除整个节点；//无参数
			detach() 删除整个节点，保留元素的绑定事件、附加的数据 //无参数
				$("body").append($("p").detach());//移动元素并保留其关联事件
				$("p").click(function(){
					$(this).animate({fontSize:"+=1px"})
				  });
		
			 
	节点遍历
		1.遍历后代
		children() //可以用来获取元素的所有子元素
			$("body").children();返回第一代节点数,//不含后代元素及文本节点
		2.遍历同辈
			next() 紧邻其后紧邻其后  $('li:eq(1)').next()
			prev() 紧邻其前的同辈    $('li:eq(1)').prev()
			siblings()除自己之外的所有同辈 $('li:eq(1)').siblings()
		3.遍历前辈	
			parent()：获取元素的父级元素
			parents()：获取元素的所有祖辈元素

		其他遍历	
		4.each()
		
			$("img").each(function(i){ //i从0开始
				this.src = "test" + i + ".jpg"; //this 指代的是 DOM 对象而非 jQuery 对象
			});//遍历所有img  给所有img重新定义src,找不到img时终止
			
			$("img").each(function(){
			  $(this).toggleClass("example");//  $(this)jQuery 对象
			});
			
		5.find()查找
			$('p').find('span'); //在所有p元素的后代节点中查找span元素

	

JSON 一种轻量级的数据交互格式
	//JavaScript Object Notation  //notation乐谱、记号法
	JSON的语法 var JSON ={'attr1':'value1','attr2','value2', … }
	SON的取值方法 //JSON.attr1
	JSON的数值 //可以是	数字、字符串、布尔值、数组、对象、null

	//例1
	var student={'name':'Tom','age':18}
	alert(student.age);
	//例2
	var JSON={
		'student':[{'name':'Tom','age':21},{'name':'John','age':23}, … ]
	}
	alert(JSON.student[0].age)


----------------------------------------------------------------
方法
	事件绑定element.on(event,callback)
	事件解除element.off(event)
	模拟用户事件element.trigger(event)  //可触发对应事件，即使用户没有操作
	
	鼠标事件
		click //click事件发生在mousedown+mouseup之后
		dblclick
		blur/focus  用于表单元素
		mousedown 鼠标按下
		mouseup   鼠标抬起 
			//mouseup是一个独立的事件
			//鼠标点下，移至其他地方松开时，不触发mouseup
		mouseover
		mouserout
		
	键盘事件
		keydown
		keyup
		keypress //keypress发生在keydown之后
		change//input等 该事件仅适用于文本域（text field），以及 textarea 和 select 元素。
		submit //form
		
	事件句柄　(Event Handlers)
		
toggle([speed],[easing],[fn]) 模拟鼠标的连续单击事件 或 切换元素的可见状态
	1.用于绑定两个或多个事件处理器函数，以响应被选元素的轮流的 click 事件。
		//$("").toggle(fn1;fn2;fn3);
	2.如果元素是可见的，切换为隐藏的；如果元素是隐藏的，切换为可见的。
	3.无参数时，对表格切换显示、隐藏
		$('input').click(function(){
	 		$('li:gt(5):not(:last)').toggle()
	 	})
show()与hide()	显示、隐藏	 //宽、高、透明度
	show(持续时间,动画路线,完成后执行时间) 
	hide([duration],[easing],[complete])
		//动画路线 默认"swing"，"linear"
		//持续时间slow、normal、fast

fadeIn()与fadeOut()  淡入淡出 //透明度

slideDown()与slideUp() 向下展开、向上收缩

animate()自定义动画
	$(selector).animate(params,[speed],[easing],[fn]);
	params:规定产生动画效果的CSS样式和值
	speed:"slow","normal", or "fast"或表示动画时长的毫秒数值(如：1000)
	easing:要使用的擦除效果的名称(需要插件支持).默认jQuery提供"linear" 和 "swing"
	fn:在动画完成时执行的函数，每个元素执行一次




表格 隔行变色
	$("tr:even").not(":first").css("background-color", "#eee")
	//not(":first")除去首行


	
getcomputedstyle	
	使用未单独设置的属性 可用getcomputedstyle
	
	
事件委托：
	$(document).on('click',‘#abc'，function(){  })//将#abc委托给document
命名空间data-api
	优点：保护对象，仅在特定命名空间内可以执行相应事件
	$('body').off('.alert.data-api') //解除事件
				
	
	


		
		