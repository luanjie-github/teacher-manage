addteacher={
	path:'',
	id:''
}
addteacher.init=function(){
	addteacher.path = etm.getPath();
	$.ajax({
		url:addteacher.path+'/teacher/selectyx.do', 
		cache: false,
		async: false,
		data:{'ls_id':addteacher.id},
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
		url:addteacher.path+'/teacher/selectkc.do', 
		cache: false,
		async: false,
		dataType : "json",
		success:function(data){
			var seHtml = "";
			for(var i = 0 ;i<data.length; i++) {
			                  seHtml += "<option>"+data[i].text+"</option>";
			         }
			$("#kc").html(seHtml);
		}
	});
	
}
addteacher.add=function(){
	var xm = $('#xm').val();
	var skdd = $('#skdd').val();
	var kc = $('#kc').val();
	var sksj = $('#sksj').val();
	var yx = $('#yx').val();
	var xl = $('#xl').val();
	var zc = $('#zc').val();
	$.ajax({
		url:addteacher.path+'/teacher/addteacher.do', 
		cache:false,
		data:{
			'xm':xm,
			'skdd':skdd,
			'kc':kc,
			'sksj':sksj,
			'yx':yx,
			'xl':xl,
			'zc':zc
		},
		success:function(data){
			alert('新增成功');
			window.parent.location.reload(); //刷新父页面
			var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			parent.layer.close(index);
		}
	});
}