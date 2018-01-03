<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String user=(String)request.getSession().getAttribute("user");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>系部信息管理</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <jsp:include page="../frame/resource.jsp"></jsp:include>
    <script type="text/javascript" src="<%=basePath%>/jslib/layer/layer.js"></script>
	<script type="text/javascript" src="<%=basePath%>/jslib/layer/extensions/layer.extend.js"></script>
    <script type="text/javascript" src="<%=basePath %>/page/system/js/processsystem.js"></script>
    <script type="text/javascript">
    	$(function(){
			processsystem.init();
		});
    </script>
    <style type="text/css">
  	.btn_tijiao{
	    	width:73px;height:27px;line-height:27px;color:blue;border:none;margin-left:10px;cursor:hand;
	    }
	     
	    .div1 button:hover {
	    	filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8;
	    }
	    .btn_zjzx{
	    	width:112px;height:27px;line-height:27px;color:white;border:none;margin-left:10px;cursor:hand;
	    }
	    .div1 a:hover img{filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8;} 
	    table {
   				display: table;
			    border-collapse: separate;
			    border-spacing: 0;
			    border-color: white;
			   }
  		 .s1{width:200px;height:32px;outline:none;font-size:18px;line-height:32px;border:none;}
  		 table{
			border-collapse: collapse;
		}
  	</style>
  </head>
  
   <body class="easyui-layout" style="background-color:#B0CFEE">
    <div data-options="region:'north'" style=" height:40px;padding-top:5px">
      <div style="width:100%;float:left;margin-top:5px">
    	<input type="submit" id="add" value="添加" onclick="add()" style='float:right;margin-right:60px'/>
    	<input type="submit" id="delete" value="删除" onclick="del()" style='float:right;margin-right:60px'/>
      </div>
    </div>
    
    <div data-options="region:'center'">
    	<div id="system" title="系部信息" align="center"></div>
    </div>
</html>
