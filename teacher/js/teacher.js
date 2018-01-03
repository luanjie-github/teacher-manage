teacher={
	path:'',
	condition:{
		xm:'',
		yx:'',
		zc:'',
		kc:'',
		skdd:'',
		sksj:'',
		xl:''
	}
}
teacher.init=function(){
    teacher.path = etm.getPath();
	$('#yx').combobox({
		url:teacher.path+'/teacher/selectyx.do',
		valueField:'id',
		textField:'text',
		onSelect:function(rec){
			$('#kc').combobox({
				url:teacher.path+'/teacher/selectkc.do?id='+rec.id,
				valueField:'id',
				textField:'text'
			});
		}
	});
	$('#teacher').datagrid({
	   	rownumbers : true,
		fit : true, 
		fitColumns : true, 
		columns:[[ 
		   {field:'xm',title:'教师姓名',width:200,align:'center'}, 
		   {field:'yx',title:'院系',width:200,align:'center'}, 
		   {field:'zc',title:'职称',width:150,align:'center'}, 
		   {field:'kc',title:'授课名称',width:150,align:'center'}, 
		   {field:'skdd',title:'授课地点',width:150,align:'center'}, 
		   {field:'sksj',title:'授课时间',width:150,align:'center'}, 
		   {field:'xl',title:'学历',width:150,align:'center'}
		  ]]
	});
}
function chaxun(){
	var yxid = $('#yx').combobox('getValue');
	var id = null;
	if(yxid!=''){
		id = $('#kc').combobox('getValue');
	}
	var xm = $('#xm').val();
	if(yxid!=''||id!=null||xm!=''){
		$.ajax({
			url:teacher.path+'/teacher/find.do', 
			cache:false,
			data:{'yxid':yxid,'xm':xm,'kcid':id},
			success:function(data){
				$('#teacher').datagrid('loadData',JSON.parse(data));
			}
		});
	}else{
		alert("请输入查询条件");
	}
	
}