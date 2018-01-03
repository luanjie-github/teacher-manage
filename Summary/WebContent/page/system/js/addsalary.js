addsalary={
	path:''
}
addsalary.init=function(){
	debugger;
	addsalary.path = etm.getPath();
	$.ajax({
		url:addsalary.path+'/teacher/selectdkjjb.do', 
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
		url:addsalary.path+'/teacher/selectdkls.do', 
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
addsalary.add=function(){
	var xm = $('#xm').val();
	var dkjjb = $('#dkjjb').val();
	var jbgz = $('#jbgz').val();
	var dksj = $('#dksj').val();
	$.ajax({
		url:addsalary.path+'/system/addsalary.do', 
		cache:false,
		data:{
			'xm':xm,
			'dkjjb':dkjjb,
			'jbgz':jbgz,
			'dksj':dksj,
		},
		success:function(data){
			alert('新增成功');
			window.parent.location.reload(); //刷新父页面
			var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			parent.layer.close(index);
		}
	});
}