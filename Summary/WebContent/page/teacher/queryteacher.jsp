<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>外聘教师信息查询</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <jsp:include page="../frame/resource.jsp"></jsp:include>
    <script type="text/javascript" src="<%=basePath %>/page/teacher/js/teacher.js"></script>
    <script type="text/javascript">
    	$(function(){
    		teacher.init();
    	});
    
    </script>

	</head>
	
   <body class="easyui-layout" style="background-color:#B0CFEE">
    <div data-options="region:'north',title:'查询栏'" style=" height:70px;padding-top:5px">
      <div style="width:100%;float:left;margin-top:5px">
    	<span style="margin-left:20px">系部：</span><input type="text" id="yx"/>
    	<span style="margin-left:20px">课程名称：</span><input type="text" id="kc"/>
    	<span style="margin-left:20px">教师姓名：</span><input type="text" id="xm"/>
    	<input type="submit" id="chaxun" value="查询" onclick="chaxun()" style='float:right;margin-right:60px'/>
      </div>
    </div>
    
    <div data-options="region:'center'">
    	<div id="teacher" title="教师信息" align="center"></div>
    </div>
  </body>
</html>
