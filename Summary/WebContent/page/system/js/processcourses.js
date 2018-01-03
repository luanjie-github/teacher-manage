processcourses={
	path:''
}
processcourses.init=function(){
		processcourses.path = etm.getPath();
		$('#courses').datagrid({
			url:processcourses.path+'/system/findkc.do', 
		   	rownumbers : true,
			fit : true, 
			fitColumns : true,
			singleSelect:true, 
			columns:[[ 
			   {field:'kc_id',title:'id',hidden:true}, 
			   {field:'kcmc',title:'课程名称',width:180,align:'center'},
			   {field:'dkls',title:'代课老师',width:180,align:'center'},
			   {field:'yxmc',title:'院系名称',width:180,align:'center'},
			   {field:'id',title:'操作',width:360,align:'center',formatter:function(value,row,index){
							   var borrow="<a><button class='btn_tijiao' style='margin-left:5px' onClick='edit(\""+row.kc_id+"\")'>编辑</button></a>";
							      borrow+="<a><button class='btn_tijiao' style='margin-left:5px' onClick='del(\""+row.kc_id+"\")'>删除</button></a>" ;
							      borrow+="<a><button class='btn_tijiao' style='margin-left:5px' onClick='add()'>新增</button></a>";
							  return borrow;
							   
				}}
			  ]]
		});
}

function del(id){
	$.ajax({
		url:processcourses.path+'/system/deletekc.do', 
		cache: false,
		async: false,
		data:{'kc_id':id},
		success:function(data){
			alert("删除成功");
			processcourses.init();
		}
	});
}
function add(){
	var url=processcourses.path+'/page/system/addkc.jsp';
    layer.open({
		type: 2,
		title: '新增课程信息',
        shadeClose: true,
        area: ['100%', '100%'],
        skin: 'layui-layer-lan',
        content: url
 	});
}
function edit(id){
	var url=processcourses.path+'/page/system/editkc.jsp?kc_id='+id;
    layer.open({
		type: 2,
		title: '修改课程信息',
        shadeClose: true,
        area: ['100%', '100%'],
        skin: 'layui-layer-lan',
        content: url
 	});
}
	
