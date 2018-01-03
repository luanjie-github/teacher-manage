package com.etm.service;

import java.util.List;

import com.etm.entity.TreeEntity;

/**
 * 用户service
 * @author Administrator
 *
 */
public interface UserService {

	Integer login(String username, String password);

	List<TreeEntity> getTreeData();

	List<TreeEntity> getTreeDataByUser();

	String getpassword(String user);

	void editpassword(String user, String password);

}
