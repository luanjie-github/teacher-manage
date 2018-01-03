<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">

		<title>统计分析图</title>

		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<jsp:include page="../frame/resource.jsp"></jsp:include>
		<script type="text/javascript"
			src="<%=basePath%>/page/teacher/js/addteacher.js"></script>
		<script type="text/javascript"
			src="<%=basePath%>/jslib/echarts3.0/echarts.min.js"></script>
			<script type="text/javascript"
			src="<%=basePath%>/jslib/echarts3.0/macarons.js"></script>
		<script type="text/javascript" src="<%=basePath%>/page/tjfx/js/xltjfx.js"></script>
		<script type="text/javascript">
	    	$(function(){
				xltjfx.init();
			});
   		 </script>
	</head>

	<body>
		<div id="container" style="height: 100%"></div>
	</body>
</html>
