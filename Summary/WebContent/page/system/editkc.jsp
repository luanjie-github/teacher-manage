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

		<title>修改课程信息</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<jsp:include page="../frame/resource.jsp"></jsp:include>
		<script type="text/javascript"
			src="<%=basePath%>/page/system/js/editkc.js"></script>
		<script type="text/javascript">
    	$(function(){
			editkc.init();
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
			修改课程信息
		</p>
		<table align="center" cellspacing="1" bgcolor="#000000"
			style="margin-top: 20px">
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					课程名称:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<input type="text" id="kcmc" name="Model.kcmc" class="s1" />
				</td>
			</tr>
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					代课老师:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<select id="dkls" class="s1"></select>
				</td>
			</tr>
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					院系:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<select id="yx" class="s1"></select>
				</td>
			</tr>
		</table>
		<div align="center"
			style="margin-left: 20px; margin-top: 20px; height: 30px">
			<input id="addDemp" name="addDemp" type="image"
				src="<%=basePath%>image/save.png" onClick="editkc.add()">
		</div>
	</body>
</html>
