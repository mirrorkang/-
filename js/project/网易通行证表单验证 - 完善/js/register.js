/**value
 * Created by honglin.jiang on 2014/10/14.
 */
 window.onload=function(){
 	function ID(id){
 		return document.getElementById(id)
 	}
 	//通行证用户名
 	ID('userName').onblur=function(){
	 	if(ID('userName').value.length==0){
	 		ID('userNameId').innerHTML ='*用户名不能为空'
	 	}else{
	 		ID('userNameId').innerHTML ='√'
	 	}
 	}
 	//登录密码
 	ID('pwd').onblur=function(){
	 	if(ID('pwd').value.length<6){
	 		ID('pwdId').innerHTML ='*密码不能少于六位'
	 	}else{
	 		ID('pwdId').innerHTML ='√'
	 	}
 	}
 	//重复登录密码
 	ID('repwd').onblur=function(){
 		if(ID('repwd').value==''){
 			ID('repwdId').innerHTML ='*请确认密码'
	 	}else if(ID('repwd').value != ID('pwd').value){
	 		ID('repwdId').innerHTML ='*密码不一致'
	 	}else{
	 		ID('repwdId').innerHTML ='√'
	 	}
 	}
 	
 	//昵称
 	ID('nickName').onblur=function(){
	 	if(ID('nickName').value.length==0){
	 		ID('nickNameId').innerHTML ='*昵称不能为空'
	 	}else{
	 		ID('nickNameId').innerHTML ='√'
	 	}
 	}
 	//关联手机号
 	ID('tel').onblur=function(){
	 	if(ID('tel').value.length!=11){
	 		ID('telId').innerHTML ='*请输入11位手机号'
	 	}else{
	 		ID('telId').innerHTML ='√'
	 	}
 	}
 	//保密邮箱
 	ID('email').onblur=function(){
 		if(ID('email').value.length<4){
 			ID('emailId').innerHTML ='*请确认正确的邮箱'
 		}else if(ID('email').value.indexOf('@')==-1 ||ID('email').value.indexOf('.')==-1 ){
 			ID('emailId').innerHTML ='*请确认正确的邮箱'
	 	}else{
	 		ID('emailId').innerHTML ='√'
	 	}
 	}
 }
