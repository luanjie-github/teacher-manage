<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String user=(String)request.getSession().getAttribute("user");

%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>外聘教师管理系统</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
	<jsp:include page="page/frame/resource.jsp"></jsp:include>
	
	<script type="text/javascript" src="js/main.js"></script>
	
	
	 <link rel="stylesheet" href="CSS/index.css" type="text/css"></link> 
	
	<script type="text/javascript">
		function getCookie(name)
		{
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			return unescape(arr[2]);
			else
			return null;
		}
	
		$(function(){
			var oldLoginUrl=getCookie('loginHref');
			if(oldLoginUrl){
				main.oldLoginUrl=oldLoginUrl;
			}
			main.init();
			$("#leftTree").css("height",$(document).height()-140);
			
		  $('.layout-panel-west').attr("style","left: 0px; top: 88px; width: 240px");
		});
	</script>
	<style type="text/css">
	
	</style>
</head>
  <body class="easyui-layout">
     	<div class="head" data-options="region:'north',title:''">
     		<span>欢迎您，<%=user %><a style="color:#fff; font-family:'微软雅黑'" id="userName" href="#"></a>!<a href="index.jsp">退出</a></span>
     	</div>
     	<div class="left_nav"   data-options="region:'west',title:'',width:240,border:false" style="top:80px;">
     		<div id="leftTree" class="nav" style="overflow:auto;height:530px;">
	     		<dl class="leftmenu" id="ctree">
				</dl>
	     	</div>
	     
     	</div>
     	<div data-options="region:'center',title:''">
     		  <iframe id="cframe"  frameborder="0" src="" style="width:100%;height:99%;border:0px;position:relative;scroll:no"></iframe>
     	</div>
      
  </body>
</html>
