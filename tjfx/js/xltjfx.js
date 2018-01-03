xltjfx={
	path:''
}
xltjfx.init=function(){
	var myChart = echarts.init(document.getElementById('container'));
	xltjfx.path = etm.getPath();
	var datas=[];
	$.ajax({
		url:xltjfx.path+'/tjfx/xltjfx.do', 
		cache: false,
		async: false,
		dataType : "json",
		success:function(data){
			datas=data;
		}
	});
	var option = xltjfx.getOption(datas);
	if (option && typeof option === "object") {
		  					myChart.setOption(option, true);
	}
}
xltjfx.getOption=function(data){
	var option = null;
	var colors=[
	'#0000FF','#00FF00','#FFFF00','#FF0000'];
	option={
		title:{
			text:'教师学历统计饼状图',
			subtext:'人数',
			x:'center'
		},
		tooltip : {
	       trigger: 'item',
	       formatter: "{b} : {c}人 ({d}%)"
    	},
		toolbox:{
			show:true,
			feature:{
				saveAsImage:{
					show:true
				},
				dataView:{
					show:true
				}
			}
		},
		
    	series: [{
	        name: '教师学历统计饼状图',
	        type: 'pie',
	        data:data,
	        itemStyle : {  
                normal : {  
                	label:{
                		show:true,
                		formatter:"{b} : {c}人 ({d}%)"
                	},
                    color:function(value){  
                    	return colors[value.dataIndex];
                    }  
                } 
         	}
   		}]
	};
	return option;

}