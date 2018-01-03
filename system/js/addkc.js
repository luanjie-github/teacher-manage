addkc={
	path:''
}
addkc.init=function(){
	addkc.path = etm.getPath();
	$.ajax({
		url:addkc.path+'/teacher/selectyx.do', 
		cache: false,
		async: false,
		dataType : "json",
		success:function(data){
			var seHtml = "";
			for(var i = 0 ;i<data.length; i++) {
			      seHtml += "<option>"+data[i].text+"</option>";
			         }
			$("#yx").html(seHtml);
		}
	});
	$.ajax({
		url:addkc.path+'/teacher/selectdkls.do', 
		cache: false,
		async: false,
		dataType : "json",
		success:function(data){
			var seHtml = "";
			for(var i = 0 ;i<data.length; i++) {
			      seHtml += "<option>"+data[i].text+"</option>";
			         }
			$("#dkls").html(seHtml);
		}
	});
}
addkc.add=function(){
	var kcmc = $('#kcmc').val();
	var dkls = $('#dkls').val();
	var yx = $('#yx').val();
	$.ajax({
		url:addkc.path+'/system/addkc.do', 
		cache:false,
		data:{
			'kcmc':kcmc,
			'dkls':dkls,
			'yx':yx
		},
		success:function(data){
			alert('新增成功');
			window.parent.location.reload(); //刷新父页面
			var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			parent.layer.close(index);
		}
	});
}