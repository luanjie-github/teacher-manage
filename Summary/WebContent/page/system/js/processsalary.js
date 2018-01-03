processsalary={
	path:''
}
processsalary.init=function(){
		processsalary.path = etm.getPath();
		$('#salary').datagrid({
			url:processsalary.path+'/system/findsalary.do', 
		   	rownumbers : true,
			fit : true, 
			fitColumns : true,
			singleSelect:true, 
			columns:[[ 
			   {field:'ls_id',title:'id',hidden:true}, 
			   {field:'xm',title:'代课老师',width:180,align:'center'},
			   {field:'dkjjb',title:'代课金级别',width:180,align:'center'},
			   {field:'jbgz',title:'基本工资',width:180,align:'center'},
			   {field:'dksj',title:'代课时间',width:180,align:'center'},
			   {field:'zgz',title:'总工资（元）',width:180,align:'center'},
			   {field:'id',title:'操作',width:360,align:'center',formatter:function(value,row,index){
							   var borrow="<a><button class='btn_tijiao' style='margin-left:5px' onClick='edit(\""+row.ls_id+"\")'>编辑</button></a>";
							      borrow+="<a><button class='btn_tijiao' style='margin-left:5px' onClick='del(\""+row.ls_id+"\")'>删除</button></a>" ;
							      borrow+="<a><button class='btn_tijiao' style='margin-left:5px' onClick='add()'>新增</button></a>";
							  return borrow;
							   
				}}
			  ]]
		});
}

function del(id){
	$.ajax({
		url:processsalary.path+'/system/deletesalary.do', 
		cache: false,
		async: false,
		data:{'ls_id':id},
		success:function(data){
			alert("删除成功");
			processsalary.init();
		}
	});
}
function add(){
	var url=processsalary.path+'/page/system/addsalary.jsp';
    layer.open({
		type: 2,
		title: '新增教师工资信息',
        shadeClose: true,
        area: ['100%', '100%'],
        skin: 'layui-layer-lan',
        content: url
 	});
}
function edit(id){
	var url=processsalary.path+'/page/system/editsalary.jsp?ls_id='+id;
    layer.open({
		type: 2,
		title: '修改教师工资信息',
        shadeClose: true,
        area: ['100%', '100%'],
        skin: 'layui-layer-lan',
        content: url
 	});
}
	
