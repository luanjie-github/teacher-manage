editkc={
	path:'',
	kc_id:''
}
function combobox(){
	$.ajax({
		url:editkc.path+'/teacher/selectyx.do', 
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
		url:editkc.path+'/teacher/selectdkls.do', 
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
editkc.init=function(){
	debugger;
	editkc.path = etm.getPath();
	editkc.kc_id=etm.getUrlParam("kc_id");
	combobox();
	$.ajax({
		url:editkc.path+'/system/selectkcbyid.do', 
		cache: false,
		async: false,
		dataType : "json",
		data:{'kc_id':editkc.kc_id},
		success:function(data){
			$('#kcmc').val(data.kcmc);
			$('#dkls').val(data.dkls);
			$('#yx').val(data.yxmc);
		}
	});
	
}
editkc.add=function(){
	var kcmc = $('#kcmc').val();
	var dkls = $('#dkls').val();
	var yx = $('#yx').val();
	$.ajax({
		url:editkc.path+'/system/editkc.do', 
		cache:false,
		data:{
			'kc_id':editkc.kc_id,
			'kcmc':kcmc,
			'dkls':dkls,
			'yx':yx
		},
		success:function(data){
			alert('修改成功');
			window.parent.location.reload(); //刷新父页面
			var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			parent.layer.close(index);
		}
	});
}