editteacher={
	path:'',
	id:''
}
function combobox(){
	$.ajax({
		url:editteacher.path+'/teacher/selectyx.do', 
		cache: false,
		async: false,
		data:{'ls_id':editteacher.id},
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
		url:editteacher.path+'/teacher/selectkc.do', 
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
editteacher.init=function(){
	debugger;
	editteacher.path = etm.getPath();
	editteacher.id=etm.getUrlParam('id');
	combobox();
	$.ajax({
		url:editteacher.path+'/teacher/findbyid.do', 
		cache: false,
		async: false,
		data:{'ls_id':editteacher.id},
		dataType : "json",
		success:function(data){
			etm.bindData('Model',data);
			$('#yx').val(data.yx);
			$('#kc').val(data.kc);
			$('#xl').val(data.xl);
			$('#zc').val(data.zc);
		}
	});
	
}
editteacher.add=function(){
	var xm = $('#xm').val();
	var skdd = $('#skdd').val();
	var kc = $('#kc').val();
	var sksj = $('#sksj').val();
	var yx = $('#yx').val();
	var xl = $('#xl').val();
	var zc = $('#zc').val();
	$.ajax({
		url:editteacher.path+'/teacher/editteacher.do', 
		cache:false,
		data:{
			'id':editteacher.id,
			'xm':xm,
			'skdd':skdd,
			'kc':kc,
			'sksj':sksj,
			'yx':yx,
			'xl':xl,
			'zc':zc
		},
		success:function(data){
			alert('修改成功');
			window.parent.location.reload(); //刷新父页面
			var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			parent.layer.close(index);
		}
	});
}