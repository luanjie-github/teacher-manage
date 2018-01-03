

var main={
	oldLoginUrl:'login.jsp',
	usls:'',
};
//初始化
main.init=function(){
	var role = etm.getUrlParam('role');
	main.urls = etm.getPath();
	$.ajax({
		url:main.urls+'/user/getTreeDataByUser.do',
		cache:false,
		data:{'role':role},
		dataType:'json',
		success:function(data){
			var treeHtmlStr="";
			var firstPage="";
			var openFlag=false;
				for(var i=0,len=data.length;i<len;i++){
					var cHrefStr="";
					if(data[i].attributes.tr_href){
						cHrefStr="main.toNewView('"+data[i].attributes.tr_href+"')";
						if(!firstPage){
							firstPage=data[i].attributes.TR_HREF;
						}
					}
					
					treeHtmlStr+='<dd> <div class="title" onclick='+cHrefStr+'> <img src="image/'+data[i].attributes.TR_ICON+'"  width="28" height="28" />'+data[i].text+'</div>'
					var children=data[i].children;
					if(children.length>0){
						treeHtmlStr+=' <ul class="menuson">';
						for(var j=0,len2=children.length;j<len2;j++){
							if(children[j].attributes.TR_HREF&&!firstPage){
								firstPage=children[j].attributes.TR_HREF;;
							}
							var href;
							 if(children[j].attributes.TR_HREF.indexOf("\n") != -1)
							    {
							     href =children[j].attributes.TR_HREF.substring(0, children[j].attributes.TR_HREF.length-1) ;
							    }
							    else 
							    {
							     href=children[j].attributes.TR_HREF;
							    }
							treeHtmlStr+='<li onclick="main.toNewView(\''+href+'\')"><img src="image/'+children[j].attributes.TR_ICON+'"  width="20" height="20" />'+children[j].text+'</li>';
						}
						treeHtmlStr+='</ul>';
					}
					treeHtmlStr+='</dd>';
				}
				
				$("#ctree").html(treeHtmlStr);
				main.toNewView(firstPage);
				
				
				//导航切换
			$(".menuson li").click(function(){
				$(".menuson li").removeClass('active')
				$(this).addClass("active");
 			});
			
			$('.title').click(function(){
				$(".menuson li").removeClass('active')
				var $ul = $(this).next('ul');
				//$('dd').find('ul').slideUp();
				if($ul.is(':visible')){
					$(this).next('ul').slideUp();
					$(this).css({ "background": "url("+main.urls+"/image/nav1_n.png) no-repeat"});
				}else{
					$(this).next('ul').slideDown();
					$(this).css({ "background": "url("+main.urls+"/image/nav1_p.png) no-repeat"});
				}
				
				
				
			});
			if($(".menuson")&&$(".menuson").length>0&&$(".menuson").next('ul')){
				$(".menuson").next('ul').slideDown();
			}
			
			
		}
	});
	
	
}

//切换到新页面
main.toNewView=function(url){
	$("#cframe").attr("src",url);
	
}



//注销
main.zhuxiao=function(){
	main.removeSession();
	location.href=main.oldLoginUrl;
}
//退出
main.loginOut=function(){
	main.removeSession();
	location.href="MainIndex.html";
}
main.removeSession=function(){
	$.ajax({url:main.urls+'/main/removeSession.do',cache:false});
}

