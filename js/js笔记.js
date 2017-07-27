
js执行方式
	错后，后面代码不执行
JS注释方式
	// 单行注释 ； /* */多行注释
		
11.07
声明变量 
	var i=0,j=0;//变量之间最好用分号隔开
	function fn(){
		//var i=2   // 局部变量；函数内部var重新声明变量并赋值，只影响函数内部；
		i=2;  //全局变量重新赋值，改变后面所有全局的值
	}
	使用未声明的变量，报错
	使用声明但未赋值的变量，undefined
变量命名方式：
		下划线 class_name
		驼峰命名法 classOneName	
类型转换
	parseInt() 字符串转化为整型    123qqa-->123  1.23 -->1
	parseFloat() 字符串转换为浮点数，即小数；
	toString() 返回字符串；
强制类型转换：首字母大写
	Boolean()：转化为逻辑值
	Number()：对象转化为数字
	String()：对象转化为字符串

几种输出方式	
	document.write()内
		可写入html标签，同意会出现html的效果；
			document.write('<input type="button" value="登录">')
		除变量和数字之外，均需要加引号；如字符串
		引号内不能有回车，可用<br/>代替；
		'+'号前后可换行；可自由加空格
	document.writeln()   与document.write()() 方法作用相同，
		ln-->line的简写
		可在每个表达式后写入一个换行符(有可能显示为空格)。
	alert() 内部换行:/n
		window.alert(' ') 简写为alert()

	prompt()
		prompt('弹框提示语','框内默认信息') 
		prompt('请输入姓名','zhangsan') 
		注：接收到的是字符串

	confirm('是否确认？') 返回值：布尔类型

	console.log(' ')//将返回值显示在控制台
	
js 的3种引入方式：1/2从上到下加载
	1、<script>
			//js代码
		</script>
	2、<script  type="text/javascript" src="js/alert.js" ></script>
	3、<body onload="alert('内联样式')">  最后加载  
	onload ：页面加载之后立即执行一段 JavaScript

五种数据类型：undefined null string number object(function array date....)

typeof() 判断数据类型
	1.undefined  //undefined从null派生，所以比较时返回true alert(undefined==null);//true
	2.string 字符串 ，如Date()
	3.number 数字
	4.boolean 布尔.	 只要逻辑表达式不返回undefined不返回null，就都是真的。
	5.object对象  如array()数组，new Date()
	
Date()   
	输出当前日期和时间,如Mon Nov 07 2016 15:28:47 GMT+0800 (中国标准时间)
	Date() type:string 字符串
	new Date()   type:object对象
	
	
加减乘除四则运算：+  -  *  /  %取余
		取出数字各个位上的值
		var num1 =num%10; //取个位上的数字
		var num2 =parseInt(num/10)%10; //取十位上的数字
		var num3 =parseInt(num/100)%10; //取百位上的数字
		var num4 =parseInt(num/1000)%10; //取千位上的数字
		
		
元素属性
	div.textContent 保持输入时的样式
	text

		
对象

string对象 属性str.length //字符的个数 空格也算在内 4 
	split(' ');分割成数组
		'51234566'.split('4') //[5123,566]  注意，4不存在了
		'512'.split('') //参数为空时，每个字符都被分割成独立的数组元素[5,1,2]  
	
	
	charAt(1) //返回在指定位置的字符 从0开始
	charCodeAt('a') //第一次出现该字符的位置
	
	indexOf('字符串',n)  
		从指定位置n开始，指定的字符串首次出现的位置；找不到指定字符串，则返回 -1
		indexOf(str)//indexOf(str) n可省略，表示从头查询

	lastIndexOf('hello') //指定的字符串最后出现的位置，以第一个字符的位置为准
	
	match() 检索指定的值，返回符合条件的数组；找不到则返回null
		参数：字符串或正则对象
		
		str.match('cD');//["cD", index: 2, input: "aBcDef hello word helloworld"]
	
	replace 字符串替换
		str.replace(/word/,'world') //将‘word’ 替换为 'world'
	
	fontsize() 按照指定的尺寸来显示字符串 参数1-7 大于7默认显示最大
		
	
	取出特定的字符串
		slice(start,end) 支持负数，如只有一个参数n，则从指定的位置n开始，取值到结束
			str.slice(2,-5);//从第下标为2 取到  倒数第5个 
		substr(start,length)在字符串中抽取从 start 下标开始的指定数目的字符	
			第一个参数可为负；
			length不能为负,如该参数不写，默认取到最后一个字符
		substring(start,end) 提取字符串介于两个指定下标之间的字符。
			不支持负数，若输入负数，默认取正数
		str.toUpperCase());//大写 针对所有字母
		str.toLowerCase();//小写 针对所有字母

		
		



自定义对象
var person = {
		name:'zhangsan',
		say:function(){
			alert(this.name)
		}
		
	}
	//person.say();
	
数组对象
var 数组名称    =   new   Array( );   // 创建空数组对象
	没有使用参数，那么返回的数组为空，
	length 字段为 0

var 数组名称    =  new   Array( size );   // 创建size个undefined成员的数组
	length=size
	size并不限定数组元素的个数，数组的个数通过追加的方式可以超过size的数量

var 数组名称    =  new   Array( element0, element1, ..., elementn );
	直接指定了成员，则位置从0开始，对应其索引值
	//一维数组
		var array=[2,3,1,'a','b'];
	利用for语句分离数组中的内容
		for(var i=0;i<array.length;i++){
		   document.write(array[i]+'<br/>')
		}
		
	
	//二维数组 多维数组
	var grade =[['a','b','c'],[1,2,3],['甲','乙','丙']];
	
	
数组方法
	push(555) //向数组末尾添加新值，并返回新数组的长度
	
	join('>') //以指定字符分割数组中的元素
	
	sort() //返回排序后的数组;以字符串形式排列
		
		
		//针对纯数字的数组逆序排列
		//写法1
		arr.sort(function(a,b){
			return b-a;
		})
		
		//写法2
		function sortNumber(a,b)
		{
		return a - b
		}
		arr.sort(sortNumber)
11.08
循环语句：
	不知道循环次数：：while   do…while
	知道循环次数：for

	//if
		var money = parseInt(prompt('请输入你的平均月薪'))
		if (money>6000){
			document.write('买7')
		}
		else{
			document.write('不买新手机')
		}
	//switch	
		var num1 = parseInt(prompt('输入数字'));
		switch(num1){
		case 1:
			alert('')
			break;
			
		case 2:
			alert('')
			break;
			
		default:
			alert('')
			}
	//for in 对象/数组
	
		for(var i in document){
		document.write(i+'：  '+document[i]+'<br/>')
		}
		

	//while(){}    do{}while()
	do while先执行，后判断
	while先判断再执行


函数
	return 只用在函数中
	函数命名方式：
	1.
	function fn=function(){} 
	fn();
	2.	
	var fn =function(){};
	fn();
	3.	
	(function(){ 代码 })(); 直接运行
	
	document.writeln(funName) //输出这个函数的构造
	document.writeln(funName())//输出函数值	
	
	this传值
		First name: <input type="text" onfocus="setStyle(this.id)" id="fname" /><br />
		Last name: <input type="text"  onfocus="setStyle(this.id)" id="lname" />
		
		

	
	
事件绑定
	onclick       //单击
	ondbclick     //双击
	onmouseover  //鼠标移入
	onmouseout   //鼠标移出
	
	onfocus   //获得焦点时发生
	onblur    //失去焦点时发生
	onmousemove
		onmousemove="funName(e)"  //鼠标移动事件     注意传参
		<img src="sea.png " onmousemove="alert('您的鼠标刚才经过了图片！')" />
	
	onkeydown鼠标按下事件
		支持该事件的js对象：document, image, link, textarea
		获取按下的字符:IE--> event.keyCode , Netscape/Firefox/Opera --> event.which。
		document.onkeydown =function(e){
			var realkey= String.fromCharCode(e.which);
			console.log(realkey+"的键值是："+e.which);
		}
	onkeyup
	onchange
		<select onchange='change()' id='month'> //select的value为选中的option的值
			<option>1</option>
			<option>2</option>
		 </select> 
		 
	a标签的点击事件
		
		a标签本身具有点击功能，绑定点击事件时，可直接写入js代码
			<a href='javascript:alert('a标签的弹出')>a标签本身有onclick功能，无需单独设置</a> 
			<a href='javascript:outPut()'> a标签本身有onclick功能，无需单独设置</a> 
			
			但这种方法会影响this等参数的传递，IE里也会使gif动画停止播放
			alibaba 每个的javascript方法都用try、catch包围。
		
		替代方法：void(0)返回undefined，地址不发生跳转
		<a href="javascript:void(0);" onclick="js_method()"/>
		<a href="javascript:;" onclick="js_method()"/>
		<a href="#" onclick="js_method();return false;"/>
		
	setInterval(function(){},time) //每time(毫秒ms)执行一次
	setTimeout(function(){},time) //延迟(毫秒ms)后，执行一次	

函数
	try{}catch(){}  //测试程序，并显示错误信息，出错后不影响后面程序执行
		
		try{
			int i = 1/0;  //待测试程序
		}catch(error){
			........
		}
	
	window.open(URL,name,features,replace))  打开新窗口
		URL 为空时，新窗口空白
		name新窗口的名称，
			一个由逗号分隔的特征列表，其中包括数字、字母和下划线;
			这个名称可以用作标记 <a> 和 <form> 的属性 target 的值。如果该参数指定了一个已经存在的窗口
		，那么 open() 方法就不再创建一个新窗口，而只是返回对指定窗口的引用。在这种情况下，features 将被忽略
		replace	浏览历史
			true - URL 替换浏览历史中的当前条目。
			false - URL 在浏览历史中创建新的条目。
		window.open(
			'http://www.baidu.com',
			'百度',
			'height=380px,width=320px,toolbars=no,scrollbar=0,location=0,status=0,menubar=0,resizable=0'
			
		)
		
	
	
获取元素
	document.querySelector()返回匹配指定选择器的第一个元素
	id  document.getElementById('')
		1.divId.innerHTML= window.divId.innerHTML  //window可省略
		2.document.all.divId.innerHTML
	name getElementsByName(''); 数组;document.formName.inputName.innerHTML
		<form name='formName'>
			<input name='inputName'>
		 </form>
		document.formName.inputName.innerHTML
	标签名 getElementsByTagName('');数组

浏览记录history对象
	back()	加载 history 列表中的前一个 URL。
	forward()	加载 history 列表中的下一个 URL。
	go()	加载 history 列表中的某个具体页面。
	<a href="javascript:history.forward()">向前进forward</a>
	<a href="javascript:history.back()">回到上一页back</a>
	
	<a href="javascript:history.go(1)">跳转go(1)</a>
	<a href="javascript:history.go(-1)">倒退go</a>
	
	
	
date对象
	var time = new Date();
	time.getHours()
	time.getSeconds()
	time.getMiliseconds()


正则对象
	.text()
		/.+/.text(document.getElementById("nickName").value)
		/^S(?=.*[a-z])(?=.*[A-Z])/.text(document.getElementById("psd").value)
		
number对象
	num.toString(2)  //转化2进制，8进制，10进制 或 16进制 并将数字转化为字符串
	num.toFixed(5)   //保存为几位小数   并将数字转化为字符串

	
location	
	跳转: 
	location="url"
    location.href="url"
    location.assign("url");
	禁止后退的跳转: location.replace("url");