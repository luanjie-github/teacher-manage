<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">

		<title>教师工资管理</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<jsp:include page="../frame/resource.jsp"></jsp:include>
		<script type="text/javascript"
			src="<%=basePath%>/page/system/js/processsalary.js"></script>
		<script type="text/javascript" src="<%=basePath%>/jslib/layer/layer.js"></script>
		<script type="text/javascript" src="<%=basePath%>/jslib/layer/extensions/layer.extend.js"></script>
    	<script type="text/javascript" src="<%=basePath %>/page/system/js/processsalary.js"></script>
		<script type="text/javascript">
    	$(function(){
			processsalary.init();
		});
    </script>
		<style type="text/css">
.btn_tijiao {
	width: 73px;
	height: 27px;
	line-height: 27px;
	color: blue;
	border: none;
	margin-left: 10px;
	cursor: hand;
}

.div1 button:hover {
	filter: alpha(Opacity =     80);
	-moz-opacity: 0.8;
	opacity: 0.8;
}

.btn_zjzx {
	width: 112px;
	height: 27px;
	line-height: 27px;
	color: white;
	border: none;
	margin-left: 10px;
	cursor: hand;
}

.div1 a:hover img {
	filter: alpha(Opacity =     80);
	-moz-opacity: 0.8;
	opacity: 0.8;
}

table {
	display: table;
	border-collapse: separate;
	border-spacing: 0;
	border-color: white;
}

.s1 {
	width: 200px;
	height: 32px;
	outline: none;
	font-size: 18px;
	line-height: 32px;
	border: none;
}

table {
	border-collapse: collapse;
}
</style>
	</head>

	<body>
		<p align="center">
			教师工资管理
		</p>
    	<div id="salary" title="工资信息" align="center"></div>
	</body>
</html>
