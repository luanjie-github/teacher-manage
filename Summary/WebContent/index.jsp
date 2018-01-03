<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<style type="text/css">
<!--
.STYLE1 {
	font-family: "新宋体";
	font-style: italic;
}
-->
</style>
		<jsp:include page="page/frame/resource.jsp"></jsp:include>
		<script type="text/javascript" src="<%=basePath%>js/login.js"></script>
	</head>

	<body background="<%=basePath%>/image/log12.png">
		<div align="center" style="height: 350px">
			<h1 align="center" class="STYLE1">
				<tt>外聘教师管理系统</tt>
			</h1>
		</div>
		<div align="right" style="height: auto; width: 600px; float: right">
			<div align="right" style="margin-right: 20px; height: 30px">
				用户名：
				<input type="text" name="sno" id="username" />
			</div>
			<div align="right" style="margin-right: 20px; height: 30px">
				密码：
				<input type="password" name="b_pass" id="password" />
			</div>
			<div style="margin-right: 50px">
				<input type="button" value="登录" onclick="login()" />
				<input type="reset" value="重置" />
			</div>
		</div>
	</body>
</html>
