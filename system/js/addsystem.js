addsystem={
	path:''
}
addsystem.init=function(){
	addsystem.path = etm.getPath();
}
add=function(){
	var yxmc = $('#yxmc').val();
	if(yxmc!=undefined&&yxmc!=null){
		$.ajax({
			url:addsystem.path+'/system/addyx.do', 
			cache: false,
			async: false,
			data:{
				'yxmc':yxmc
			},
			success:function(data){
				alert('添加成功');
				window.parent.location.reload(); 
				var index = parent.layer.getFrameIndex(window.name); 
				parent.layer.close(index);  
			}
		});
	}else{
		alert('请输入院系名称');
	}
}