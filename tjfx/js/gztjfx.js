gztjfx={
	path:''
}
gztjfx.init=function(){
	var myChart = echarts.init(document.getElementById('container'));
	gztjfx.path = etm.getPath();
	var xAxisArray=[];
	var yAxisArray=[];
	$.ajax({
		url:gztjfx.path+'/tjfx/gztjfx.do', 
		cache: false,
		async: false,
		dataType : "json",
		success:function(data){
			for (var i = 0; i < data.length; i++) {
					xAxisArray.push(data[i].xm);
					yAxisArray.push(data[i].zgz);
			}	
		}
	});
	var option = gztjfx.getOption(xAxisArray,yAxisArray);
	if (option && typeof option === "object") {
		  					myChart.setOption(option, true);
	}
}
gztjfx.getOption=function(xAxisArray,yAxisArray){
	var option = null;
	option={
		title:{
			text:'教师月收入统计折线图图',
			subtext:'月收入',
			x:'center'
		},
		tooltip : {
    			    trigger: 'item',
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
    		data:xAxisArray,
    	},
    	yAxis: [
    		 {
            	type : 'value'
        	 }
    	],
    	series: [{
	        name: '教师职称统计柱状图',
	        type: 'bar',
	        data:yAxisArray,
	        markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
   		}]
	};
	return option;

}