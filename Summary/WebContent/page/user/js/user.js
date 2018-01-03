user={
	path:'',
	user:'',
	oldpassword:''
}
user.init=function(){
	user.path = etm.getPath();
	$.ajax({
		url:user.path+'/user/getpassword.do',
		cache:false,
		data:{'user':user.user},
		success:function(data){
			user.oldpassword=data;
		}
	});
}
user.add=function(){
	var oldpassword=$('#oldpassword').val();
	var newpassword=$('#newpassword').val();
	var newpassword1=$('#newpassword1').val();
	if(newpassword!=newpassword1){
		alert("两次密码不一致请重新输入");
	};
	if(oldpassword!=user.oldpassword){
		alert("原密码错误");
	}else{
		$.ajax({
			url:user.path+'/user/editpassword.do',
			cache:false,
			data:{'user':user.user,'password':newpassword},
			success:function(data){
				alert("修改成功");
			}
		});
	}
}