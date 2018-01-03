package com.etm.entity;
/**
 * 用户实体类
 * @author Administrator
 *
 */
public class UserEntity {
	private int user_id;
	private String username;
	private String password;
	private int wuerrole;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getWuerrole() {
		return wuerrole;
	}
	public void setWuerrole(int wuerrole) {
		this.wuerrole = wuerrole;
	}
	
}
