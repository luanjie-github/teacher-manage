package com.etm.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.etm.entity.TreeEntity;
import com.etm.service.UserService;
import com.etm.util.ETMActionSupport;

/**
 * 用户controller
 * 
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/user")
public class UserController extends ETMActionSupport{
	@Resource
	private UserService UserService;
	@RequestMapping("editpassword")
	public void editpassword(String user,String password) {
		UserService.editpassword(user,password);
		responseJson("");
	}
	/**
	 * 获取密码
	* @Title: getpassword 
	* @Description: TODO
	* @param void    参数类型 
	* @return void    返回类型
	 */
	@RequestMapping("getpassword")
	public void getpassword(String user) {
		String password = UserService.getpassword(user);
		responseJson(password);
	}
	/**
	 * 用户登录方法
	 * @param username
	 * @param password
	 * @throws IOException 
	 */
	@RequestMapping("/login")
	public void login(String username, String password) {
		Integer count = UserService.login(username, password);
		if (count!=null) {
			responseJson( count);
			request.getSession().setAttribute("user", username);
		} else {
			responseJson(0);
		}

	}
	@RequestMapping("/getTreeDataByUser")
	public void getTreeDataByUser(String role){
		List<TreeEntity> lst=new ArrayList<TreeEntity>();
		if(role.equals("1")){
			lst=UserService.getTreeData();
		}else{
			 lst=UserService.getTreeDataByUser();
		}
		responseJson(lst);
	}
	
}
