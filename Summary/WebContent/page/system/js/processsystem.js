processsystem={
	path:''
}
processsystem.init=function(){
		processsystem.path = etm.getPath();
		$('#system').datagrid({
			url:processsystem.path+'/system/find.do', 
		   	rownumbers : true,
			fit : true, 
			fitColumns : true,
			singleSelect:true, 
			columns:[[ 
			   {field:'yx_id',title:'id',width:400,align:'center'}, 
			   {field:'yxmc',title:'院系名称',width:400,align:'center'}
			  ]]
		});
}

function del(){
	debugger;
	var rows = $('#system').datagrid('getSelections');
	if (rows.length < 1) {
		alert('请先选择数据!');
		return;
	}
	var yx_id=rows[0].yx_id;
	$.ajax({
		url:processsystem.path+'/system/delete.do', 
		cache: false,
		async: false,
		data:{'yx_id':yx_id},
		success:function(data){
			alert("删除成功");
			processsystem.init();
		}
	});
}
function add(){
	debugger;
	var url=processsystem.path+'/page/system/addsystem.jsp';
    layer.open({
		type: 2,
		title: '新增院系信息',
        shadeClose: true,
        area: ['100%', '100%'],
        skin: 'layui-layer-lan',
        content: url
 	});
}
	
