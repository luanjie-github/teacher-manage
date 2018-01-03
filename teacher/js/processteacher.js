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
		   {field:'ls_id',title:'教师姓名',hidden:true},
		   {field:'xm',title:'教师姓名',width:200,align:'center'}, 
		   {field:'yx',title:'院系',width:200,align:'center'}, 
		   {field:'zc',title:'职称',width:150,align:'center'}, 
		   {field:'kc',title:'授课名称',width:150,align:'center'}, 
		   {field:'skdd',title:'授课地点',width:150,align:'center'}, 
		   {field:'sksj',title:'授课时间',width:150,align:'center'}, 
		   {field:'xl',title:'学历',width:150,align:'center'},
		   {field:'id',title:'操作',width:150,align:'center',formatter:function(value,row,index){
						   var borrow="<a><button class='btn_tijiao' style='margin-left:5px' onClick='teacher.edit(\""+row.ls_id+"\")'>编辑</button></a>";
						      borrow+="<a><button class='btn_tijiao' style='margin-left:5px' onClick='teacher.del(\""+row.ls_id+"\")'>删除</button></a>" ;
						      borrow+="<a><button class='btn_tijiao' style='margin-left:5px' onClick='teacher.add()'>新增</button></a>";
						  return borrow;
						   
			}}
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
teacher.edit=function(id){
	debugger;
	var url=teacher.path+'/page/teacher/editteacher.jsp?id='+id;
    layer.open({
		type: 2,
		title: '修改教师信息',
        shadeClose: true,
        area: ['100%', '100%'],
        skin: 'layui-layer-lan',
        content: url
 	});
}
teacher.add=function(){
	debugger;
	var url=teacher.path+'/page/teacher/addteacher.jsp';
    layer.open({
		type: 2,
		title: '新增教师信息',
        shadeClose: true,
        area: ['100%', '100%'],
        skin: 'layui-layer-lan',
        content: url
 	});
}
teacher.del=function(id){
	$.ajax({
		url:teacher.path+'/teacher/delteacher.do', 
		cache: false,
		async: false,
		data:{
			'ls_id':id
		},
		success:function(data){
			alert('删除成功');
		}
	});
}