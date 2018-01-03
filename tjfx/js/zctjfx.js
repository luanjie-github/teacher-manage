zctjfx={
	path:''
}
zctjfx.init=function(){
	var myChart = echarts.init(document.getElementById('container'));
	zctjfx.path = etm.getPath();
	var xAxisArray=[];
	var yAxisArray=[];
	$.ajax({
		url:zctjfx.path+'/tjfx/zctjfx.do', 
		cache: false,
		async: false,
		dataType : "json",
		success:function(data){
			for (var i = 0; i < data.length; i++) {
					xAxisArray.push(data[i].zc);
					yAxisArray.push(data[i].count);
			}	
		}
	});
	var option = zctjfx.getOption(xAxisArray,yAxisArray);
	if (option && typeof option === "object") {
		  					myChart.setOption(option, true);
	}
}
zctjfx.getOption=function(xAxisArray,yAxisArray){
	var option = null;
	option={
		title:{
			text:'教师职称统计柱状图',
			subtext:'人数',
			x:'center'
		},
		tooltip: {
	        trigger: 'item',
	        formatter:function(params){
	        	var res=params.name+'<br/>';
	        	var sumCount=0;
	        	for(var i=0;i<option.series[0].data.length;i++){
	        		sumCount+=option.series[0].data[i];
	        	}
	        	var averageCount=params.data/sumCount*100;
	        	res+='教师总人数:'+sumCount+'<br/>';
	        	res+='人数:'+params.data+'人<br/>';
	        	return res;
	        }
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
		xAxis: {
    		data:xAxisArray
    	},
    	yAxis: {},
    	series: [{
	        name: '教师职称统计柱状图',
	        type: 'bar',
	        data:yAxisArray
   		}]
	};
	return option;

}