package com.etm.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface UserDao {

	Integer login(@Param("username")String username, @Param("password")String password);

	List<Map<String, Object>> getTreeData();

	List<Map<String, Object>> getTreeDataByUser();

	String getpassword(@Param("user")String user);

	void editpassword(@Param("user")String user, @Param("password")String password);

}
