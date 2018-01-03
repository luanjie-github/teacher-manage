editsalary={
	path:'',
	ls_id:''
}
function combobox(){
	$.ajax({
		url:editsalary.path+'/teacher/selectdkjjb.do', 
		cache: false,
		async: false,
		dataType : "json",
		success:function(data){
			var seHtml = "";
			for(var i = 0 ;i<data.length; i++) {
			      seHtml += "<option>"+data[i].text+"</option>";
			         }
			$("#dkjjb").html(seHtml);
		}
	});
	$.ajax({
		url:editsalary.path+'/teacher/selectdkls.do', 
		cache: false,
		async: false,
		dataType : "json",
		success:function(data){
			var seHtml = "";
			for(var i = 0 ;i<data.length; i++) {
			      seHtml += "<option>"+data[i].text+"</option>";
			         }
			$("#xm").html(seHtml);
		}
	});
}
editsalary.init=function(){
	debugger;
	editsalary.path = etm.getPath();
	combobox();
	editsalary.ls_id=etm.getUrlParam("ls_id");
	$.ajax({
		url:editsalary.path+'/system/findsalarybyid.do', 
		cache:false,
		data:{
			'ls_id':editsalary.ls_id
		},
		dataType : "json",
		success:function(data){
			$('#xm').val(data.xm);
			$('#dkjjb').val(data.dkjjb);
			$('#jbgz').val(data.jbgz);
			$('#dksj').val(data.dksj);
			$('#zgz').val(data.zgz);
		}
	});
	
}
editsalary.add=function(){
	var xm = $('#xm').val();
	var dkjjb = $('#dkjjb').val();
	var jbgz = $('#jbgz').val();
	var dksj = $('#dksj').val();
	$.ajax({
		url:editsalary.path+'/system/editsalary.do', 
		cache:false,
		data:{
			'ls_id':editsalary.ls_id,
			'xm':xm,
			'dkjjb':dkjjb,
			'jbgz':jbgz,
			'dksj':dksj
		},
		success:function(data){
			alert('修改成功');
			window.parent.location.reload(); //刷新父页面
			var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			parent.layer.close(index);
		}
	});
}