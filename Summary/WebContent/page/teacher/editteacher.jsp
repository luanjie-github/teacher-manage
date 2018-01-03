<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String user = (String) request.getSession().getAttribute("user");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">

		<title>修改教师信息</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<jsp:include page="../frame/resource.jsp"></jsp:include>
		<script type="text/javascript"
			src="<%=basePath%>/page/teacher/js/editteacher.js"></script>
		<script type="text/javascript">
    	$(function(){
			editteacher.init();
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
	filter: alpha(Opacity = 80);
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
	filter: alpha(Opacity = 80);
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
			修改教师信息
		</p>
		<table align="center" cellspacing="1" bgcolor="#000000"
			style="margin-top: 20px">
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					教师姓名:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<input type="text" id="xm" name="Model.xm" class="s1" />
				</td>
			</tr>
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					授课地点:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<input type="text" id="skdd" name="Model.skdd" class="s1" />
				</td>
			</tr>
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					授课名称:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<!-- <input type="text" id="kc" name="Model.kc" class="s1" /> -->
					<select id="kc" class="s1"></select>
				</td>
			</tr>
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					授课时间:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<input type="text" id="sksj" name="Model.sksj" class="s1" />
				</td>
			</tr>
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					院系:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<!--  <input type="text" id="yx" name="Model.yx" class="s1" /> -->
					<select id="yx" class="s1"></select>
				</td>
			</tr>
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					学历:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<select id="xl" class="s1">
						<option>大专</option>
						<option>本科</option>
						<option>研究生</option>
						<option>硕士</option>
						<option>博士</option>
					</select>
				</td>
			</tr>
			<tr height="32">
				<td width="110" height="32" align="center" bgcolor="#E7EFF1">
					职称:
				</td>
				<td width="200" height="32" align="center" bgcolor="#E7EFF1">
					<select id="zc" class="s1">
						<option>初级</option>
						<option>中级</option>
						<option>副高级</option>
						<option>高级</option>
					</select>
				</td>
			</tr>
		</table>
		<div align="center"
			style="margin-left: 20px; margin-top: 20px; height: 30px">
			<input id="addDemp" name="addDemp" type="image"
				src="<%=basePath%>image/save.png" onClick="editteacher.add()">
		</div>
	</body>
</html>
