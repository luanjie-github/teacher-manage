var common={
	loadMsgText:'正在加载数据...',
	basePath:''
	 
};
//设置input组件宽度和父td宽度一样
common.setInput100Percent=function(id){
	var curInput$=$("#"+id);
	if(curInput$){
		curInput$.css("width",(curInput$.parent().width())+"px");
	}
}
//设置数字类型控件100展示
common.setNumberInput100Percent=function(id){
	var curInput$=$("#"+id);
	if(curInput$){
		curInput$.numberbox({
			width:(curInput$.parent().width()),
			height:35,
			border:false
		});
	}
	
}

//设置日期控件100%显示 高度30
common.setDateInput100Percent=function(id){
	var curInput$=$("#"+id);
	if(curInput$){
		curInput$.datebox({
			width:(curInput$.parent().width()),
			height:35
		});
	}
}
//设置日期控件100%显示
common.setDateInput100Percent2=function(id){
	var curInput$=$("#"+id);
	if(curInput$){
		curInput$.datebox({
			width:(curInput$.parent().width())
		});
	}
}

//设置下拉框100%显示
common.setCombobox100Percent=function(id,height){
	var curInput$=$("#"+id);
	if(!height){
		height=35;
	}
	if(curInput$){
		if(height){
			curInput$.combobox({
				width:(curInput$.parent().width()),
				height:height
			});
		}else{
			curInput$.combobox({
				width:(curInput$.parent().width())
			});
		}
		
	}
}

common.setComTree100Percent=function(id,height){
	var curInput$=$("#"+id);
	if(!height){
		height=35;
	}
	if(curInput$){
		if(height){
			curInput$.combotree({
				width:(curInput$.parent().width()),
				height:height
			});
		}else{
			curInput$.combotree({
				width:(curInput$.parent().width())
			});
		}
		
	}
}


//判断普通文本控件是否为空  是 true,否false (有值)
common.isNullOrEmpty=function(id){
	if($("#"+id)){
		if($("#"+id).val()){
			return false;
		}
	}
	return true;
}
//判断下拉框选择值是否为空 是true 否false
//id（组件id）
common.isComboxNullOrEmpty=function(id){
	if($("#"+id)){
		if($("#"+id).combobox('getValue')){
		return false;
		}
	}
	return true;
}
//弹出框
common.alert=function(messageStr){
	$.messager.alert('提示',messageStr); 
}
//提示框  可执行方法
common.alertFun=function(messageStr,fun){
	$.messager.alert('提示',messageStr,null,function(){
		fun();
	});   
}

//进度条
common.progress=function(messageStr){
	$.messager.progress({title:'提示',msg:messageStr});
}
common.progressClose=function(){
	$.messager.progress('close');
}

//左下角弹出框 默认两秒
common.showAlert=function(messageStr,second){
	if(!second){
		second=2000;
	}
	 $.messager.show({
		title:'提示',
		width:500,
		msg:messageStr,
		timeout:second,
		showType:'slide',
		 style:{ 
             right:'', 
             top:document.body.scrollTop+document.documentElement.scrollTop, 
             bottom:'' 
         } 
	});
}

//给数字类型控件赋值
common.setNumberInputValue=function(id,data){
	var c_data="";
	if(data&&(data[id]||data[id]==0)){
		c_data=data[id];
	}
	if($("#"+id)){
		$("#"+id).numberbox('setValue',c_data);
	}
}
common.setNumberInputValue2=function(id,data){
	var c_data="";
	if(data){
		c_data=data;
	}
	if($("#"+id)){
		$("#"+id).numberbox('setValue',c_data);
	}
}

//给控件赋值
common.setInputValue=function(id,data){
	var c_data="";
	if(data&&data[id]){
		c_data=data[id];
	}
	if($("#"+id)){
		$("#"+id).val(c_data);
	}
}
common.setInputValue2=function(id,data){
	var c_data="";
	if(data ){
		c_data=data;
	}
	if($("#"+id)){
		$("#"+id).val(c_data);
	}
}

//给下拉控件赋值
// id（控件id） data(对象)
common.setComboxValue=function(id,data){
	var c_data="";
	if(data&&data[id]){
		c_data=data[id];
	}
	if($("#"+id)){
		$("#"+id).combobox('setValue',c_data);
	}
}

//给下拉框树赋值
common.setComtreeValue=function(id,data){
	var c_data="";
	if(data&&data[id]){
		c_data=data[id];
	}
	if($("#"+id)){
		$("#"+id).combotree('setValue',c_data);
	}
}
//给日期控件赋值
// id（控件id） data(对象)
common.setDateValue=function(id,data){
	var c_data="";
	if(data&&data[id]){
		c_data=DateUtil.dateToStr("yyyy-MM-dd",new Date(data[id]));
	}
	if($("#"+id)){
		$("#"+id).datebox('setValue',c_data);
	}
}
//给日期控件赋值  id(控件id) dateStr(格式 2015-07-16)
common.setDateValue2=function(id,dateStr){
	var c_data="";
	if(dateStr){
		c_data=dateStr;
	}
	if($("#"+id)){
		$("#"+id).datebox('setValue',c_data);
	}
}

//设置下拉框本地数据
common.setLocalDicData=function(zjId,data){
	var $curZj=$("#"+zjId)
	if($curZj){
		$curZj.combobox({
		data:data,
		valueField:'sd_keyno',
		textField:'sd_value'
	});
	}
}

////字典相关
//type=static 获取缓存数据
common.getDicData=function(id,type,other){
	var sData=$.ajax({
		url:common.getRootPath()+'/lpb/Bdcxmgl_getDicList.action',
		async:false,
		cache:false,
		data:{id:id,other:other,type:type}
	}).responseText;
	
	sData= eval(sData);
	return sData;
}
//字典 异步
//主要用于一个页面初始化多个下拉组件
common.getDicDataSynFun=function(id,fun,type,other){
	$.ajax({
		url:common.getRootPath()+'/lpb/Bdcxmgl_getDicList.action',
		cache:false,
		data:{id:id,other:other,type:type},
		dataType:'json',
		success:function(data){
			fun(data);
		}
	});
}

//获取字典值 异步
//字典id,other(其它条件),zjId(组件id)
common.getDicDataSyn=function(zjId,id,other){
	var sData=$.ajax({
		url:common.getRootPath()+'/lpb/Bdcxmgl_getDicList.action',
		async:true,
		cache:false,
		dataType:'json',
		data:{id:id,other:other,type:'static'},
		success:function(data){
			var $curZj=$("#"+zjId)
			if($curZj){
				$curZj.combobox({
				data:data,
				valueField:'sd_keyno',
				textField:'sd_value'
			});
			}
		}
	});
}

common.getDicDataFwyt=function(){
	var sData=$.ajax({
		url:common.basePath+'/lpb/Bdcxmdz_getFwytJSON.action',
		async:false,
		cache:false
	}).responseText;
	
	sData= eval(sData);
	return sData;
}


//获取路径
common.getRootPath=function(){
	var curWWWpath=window.document.location.href;
	var pathName=window.document.location.pathname;
	var pos=curWWWpath.indexOf(pathName);
	var localhostPath=curWWWpath.substring(0,pos);
	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
	return (localhostPath+projectName);
}
common.basePath=common.getRootPath();

//根据value获取控件值
common.getTextByValue=function(id,value){
	var cData=common.getDicData(id);
	var cTextStr="";
	for(var i=0,len=cData.length;i<len;i++){
		if(value==cData[i].sd_keyno){
			cTextStr=cData[i].sd_value;
			break;
		}
	}
	return cTextStr;
}

//cData 字典数据 value 值
common.getTextByValue2=function(cData,value){
	var cTextStr="";
	for(var i=0,len=cData.length;i<len;i++){
		if(value==cData[i].sd_keyno){
			cTextStr=cData[i].sd_value;
			break;
		}
	}
	return cTextStr;
}
//获取url参数
common.getUrlParam=function(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
     var r = window.location.search.substr(1).match(reg);  //匹配目标参数
     if (r != null) return unescape(r[2]); return null; //返回参数值
}

//判断是否为正确的日期
common.isRightDate=function(id){
	var cdate=$("#"+id);
	if(cdate){
		var cDateValue=cdate.datebox('getValue');
		if(DateUtil.isDate(cDateValue,'yyyy-MM-dd')){
			return true
		}
	}
	return false;
}

//用ext打开页面
common.openForm=function(obj){
	var win=new parent.top.Ext.Window({
		title:obj.title,
		id:obj.id,
		width:obj.width,
		height:obj.height,
		modal: true,
        layout: 'fit',
		html: '<iframe   src="'+obj.url+'" style="width:100%;height:100%; border:0px;"></iframe>'
	});
	win.show();
}
//关闭Ext window
common.closeForm=function(id){
	 
	var curForm=parent.top.Ext.getCmp(id);
	if(null!=curForm){
		try{
			curForm.close();
		}catch(e){
			alert(e);
		}
	}
}
//获取上级页面。
common.getTopDocument=function(){
	var topWin=parent.top.$("#cframe");
	if(topWin&&topWin.length>0){
		var topDocument=topWin[0].contentWindow;
		return topDocument;
	}else{
		return parent;
	}
}
//格式化户号 自然幢号
common.formaterHH=function(value){
	if(!value){
		return "";
	}
	 if(value.length==1){
		return '000'+value
	 }else if(value.length==2){
		return '00'+value
	}else if(value.length==3){
		return '0'+value;
	}
	if(value.length>4){
		return value.substring(0,4);
	}
	
	return value;
}


