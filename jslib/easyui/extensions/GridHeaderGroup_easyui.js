ExtractionGridHeaderGroup = function(){
	/** 列表头  text,align */
	var theadObj = {},
		theadArray = [],
		tabName,
		danwei,
		dataRows = [],
		form,
		
		_changedata = function (arrs,typeExp){//转换数据
			var i,l,m;
			debugger
			for(var j=0,m=arrs.length;j<m;j++)
			{
			    var dataobj=arrs[j];
			    var row=[];
			    var row=row.splice(0,row.length);
			    for(i=0,l=theadArray.length;i<l;i++)
			    {
			        var dataIndex=theadArray[i].dataIndex?theadArray[i].dataIndex:"";
			      //  debugger
				    if(dataIndex=="")
				    {
				    	row.push(j+1);
				    	continue;
				    }
					else
					{   // 对数据库是数字，前台显示文字的,或者时间进行处理！
					       if(typeExp == 'B1'){
						      if (dataIndex == 'QX'){
									    var zwlxqxq="";
								    	var zwlxqxz="";
								    	var qx="";
								    	if(dataobj['ZWLXQXQ']&&dataobj['ZWLXQXZ']){
								    		zwlxqxq=DateUtil.dateToStr("yyyy-MM-dd",DateUtil.strToDate(dataobj['ZWLXQXQ']));//期限起
								    		zwlxqxz=DateUtil.dateToStr("yyyy-MM-dd", DateUtil.strToDate(dataobj['ZWLXQXZ']) );//期限止
								    	}
							       		if(zwlxqxq==null&&zwlxqxz==null){
							       			qx="";
							       		}else{
							       			qx=zwlxqxq+"&nbsp;&nbsp;~&nbsp;&nbsp;"+zwlxqxz;
							       		}
							       		row.push(qx);
							       		continue;		                	                                   						           
						           }
						    } else if(typeExp == 'B2'){
						      if (dataIndex == 'QX'){
									    var cfqxq="";
								    	var cfqxz="";
								    	var qx="";
								    	if(dataobj['CFQXQ']&&dataobj['CFQXZ']){
								    		cfqxq=DateUtil.dateToStr("yyyy-MM-dd",DateUtil.strToDate(dataobj['CFQXQ']));//期限起
								    		cfqxz=DateUtil.dateToStr("yyyy-MM-dd", DateUtil.strToDate(dataobj['CFQXZ']) );//期限止
								    	}
							       		if(cfqxq==null&&cfqxz==null){
							       			qx="";
							       		}else{
							       			qx=cfqxq+"&nbsp;&nbsp;~&nbsp;&nbsp;"+cfqxz;
							       		}
							       		row.push(qx);
							       		continue;		                	                                   						           
						           }
						    }
					    for(var p in dataobj)
						{
						    if(p==dataIndex)
						    {
						       if(typeExp == 'B0'){  //如果是不动产产权登记
						           if (dataIndex == 'REGSTAT'){
						               if(dataobj[p] == '0'){
						                 row.push('业务办理中');
						                 break;
						               } else if(dataobj[p] == '1'){
						                 row.push('已登记');
						                 break;
						               } else if(dataobj[p] == '2'){
						                 row.push('历史');
						                 break;
						               }  			                	                                   						           
						           }
						           row.push(dataobj[p]);
				        		   break; 
						        }else if(typeExp == 'B1'){  //如果是抵押
						           if (dataIndex == 'REGSTAT'){
						               if(dataobj[p] == '0'){
						                 row.push('业务办理中');
						                 break;
						               } else if(dataobj[p] == '1'){
						                 row.push('已登记');
						                 break;
						               } else if(dataobj[p] == '2'){
						                 row.push('历史');
						                 break;
						               }  			                	                                   						           
						           }else if(dataIndex == 'ZXDYSJ'){
						               if(dataobj['ZXDYSJ']){
							               var rq ='';
							               rq = DateUtil.dateToStr("yyyy-MM-dd", DateUtil.strToDate(dataobj['ZXDYSJ']) );
							               row.push(rq);
							               break;
						               } 
						           }
						        row.push(dataobj[p]);
						        break;
						    }   else if(typeExp == 'B2'){//  如果是查封
						           if (dataIndex == 'CFQXQ'){
							           if(dataobj['CFQXQ']){
							                var rq ='';
							                rq = DateUtil.dateToStr("yyyy-MM-dd", DateUtil.strToDate(dataobj['CFQXQ']) );
							                row.push(rq);
							                break;	
							           }			                		                	                                   						           
						           }else if(dataIndex == 'JFDJSJ'){
						              if(dataobj['JFDJSJ']){
							               var rq ='';
							               rq = DateUtil.dateToStr("yyyy-MM-dd", DateUtil.strToDate(dataobj['JFDJSJ']) );
							               row.push(rq);
							               break;
						              }					               
						           }
						        row.push(dataobj[p]);
						        break;
						    } else if(typeExp == 'A1'){//  如果是地税企业或个人
						           if (dataIndex == 'JGSJ'){
							           if(dataobj['JGSJ']){
							                var rqsj ='';
							                rqsj = DateUtil.dateToStr("yyyy-MM-dd", DateUtil.strToDate(dataobj['JGSJ']) );
							                row.push(rqsj);
							                break;	
							           }			                		                	                                   						           
						           }else if(dataIndex == 'DZNF'){
								    	var rq="";
								    	if(dataobj['DZNF']&&dataobj['DZYF']&&dataobj['DZRQ']){
								    		rq=dataobj['DZNF']+"-"+dataobj['DZYF']+"-"+dataobj['DZRQ'];
								    	}				
							       		row.push(rq);
							       		break;				       				               
						           }
						        row.push(dataobj[p]);
						        break;
						    }
						   row.push(dataobj[p]);
						   break; 	
						  }
						}
					}
				}
				dataRows.push(row);
			}
			return dataRows;
		};
		_subForm = function (arrs, url){//提交
			var i,
				l,
				rowStyle=[],
				rows = [];
			for(i=0,l=theadArray.length;i<l;i++){
				if(!theadArray[i].hidden){
					rowStyle.push(theadArray[i].align);
				};
			};
			for(i=0,l=arrs.length;i<l;i++){
				var arr = arrs[i],
					row = [];
				for(var j=0,k = arr.length;j<k;j++){
					if(!theadArray[j].hidden){
						row.push(arr[j]);
					};
				};
				rows.push(row.join('<&$&>'))
			};
			l = '<#$#>';
			var inputs = [
			{name: 'filename', value: tabName},
			//{name: 'depth', value: theadObj.length},
			{name: 'dw', value: danwei},
			{name: 'headerStr', value: function(){
				var result = '';
				var je = '<*>',jg='!*!',jk='&$&';
				for(i=0;i<theadObj.length;i++){
					for(var j=0,l = theadObj[i].length;j<l;j++){
						var o = theadObj[i][j];
						var colspan=o.colspan||'1';
						var rowspan=o.rowspan||'1';
						var hidden=o.hidden||'false';
						var align=o.align||'left';
						var width=o.width||'80';
						result += o.title +je+ align +je+ hidden +je+ colspan +je+rowspan+je+width +je +jg;
					}
					result += jk;
				}
				return result;
			}()},
			{name: 'styleStr', value: rowStyle.join(l)},
			{name: 'rowsStr', value: rows.join(l)}
			];
			if(!form){
				form = document.createElement("form");
				form.method = 'post';
				//form.target="_blank"
				document.body.appendChild(form);form.style.display="none";
			};
			form.action = url;
			while(form.firstChild){ //判断是否有子节点
				 form.removeChild(form.firstChild);
			};
			for(i=0,l=inputs.length;i<l;i++){
				var input = document.createElement("input");
				input.value = inputs[i].value;
				input.name = inputs[i].name;
				form.appendChild(input);
			};
			MaskUtil.unmask();
			form.submit();
		};
	return function(gridpanel, url,getrowdataurl,params,dw,expName,typeExp){
		//Ext.getBody().mask("加载数据……");
		MaskUtil.mask('正在导出...请稍后...');
		theadArray=[];
		//gridpanel.datagrid('options').title;
		tabName = expName;
		danwei=dw;
		dataRows.splice(0,dataRows.length);
		theadObj=gridpanel.datagrid('options').columns;
		var ColumnFields=gridpanel.datagrid('getColumnFields');
		for(i=0,l=ColumnFields.length;i<l;i++){
			var cols =gridpanel.datagrid('getColumnOption',ColumnFields[i]);
			var hidden_ = cols.hidden||false,
				align_ = cols.align||'left',
				dataIndex_=cols.field;
	    	theadArray.push({
			    dataIndex:dataIndex_,
				hidden:hidden_,
				align:align_
			});
		}
		
		if(getrowdataurl!="") 
		{
			if(params!="")
			{
				$.ajax({
					type : "POST",
					url:getrowdataurl,
					data:params,
					success : function(data) {
					debugger
						var responseJson = $.parseJSON(data);
                        dataRows=_changedata(responseJson,typeExp);
                        
						return _subForm(dataRows, url);
					},
					error : function(e) {
					debugger
						MaskUtil.unmask();
						 $.messager.alert("提示", "导出失败！", "info", function () {
				            
				        });
					}
				});
	        }
	        else
	        {
	        	$.ajax({
					type : "POST",
					url:getrowdataurl,
					success : function(msg) {
						var responseJson = $.parseJSON(data);
                        dataRows=_changedata(responseJson);
                        
						return _subForm(dataRows, url);
					},
					error : function(e) {
						MaskUtil.unmask();
						 $.messager.alert("提示", "导出excel失败！", "info", function () {
				            
				        });
					}
				});
	        }
        }
	};
}();