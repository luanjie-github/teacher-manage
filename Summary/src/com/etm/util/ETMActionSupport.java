package com.etm.util;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.web.bind.annotation.ModelAttribute;


public class ETMActionSupport {

	protected HttpServletRequest request;
	protected HttpServletResponse response;
	protected HttpSession session;

	@ModelAttribute
	public void setReqAndRes(HttpServletRequest request, HttpServletResponse response) {
		this.request = request;
		this.response = response;
		this.session = request.getSession();
	}
	/**
	 * 将数据返回给前台
	* @Title: responseJson 
	* @Description: TODO
	* @param void    参数类型 
	* @return void    返回类型
	 */
	protected void responseJson(Object data){
		PrintWriter out = null;
		try {
			response.setContentType("text/plain;charset=utf-8");
			response.setCharacterEncoding("utf-8");
			out = response.getWriter();
			String stringify = stringify(data);
			System.out.println(stringify);
			out.write(stringify);
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			if (out != null) {
				out.flush();
				out.close();
			}
		}
		
	}
	public static String stringify(Object obj) {
		if (obj instanceof List || obj instanceof String[]) {
			return JSONArray.fromObject(obj).toString();
		}else if(obj instanceof String || obj instanceof Boolean || obj instanceof Integer){ 
			return obj.toString();
		}else{
			return JSONObject.fromObject(obj).toString();
		}
	}
}
