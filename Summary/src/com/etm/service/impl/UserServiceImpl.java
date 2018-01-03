package com.etm.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etm.service.UserService;
import com.etm.dao.UserDao;
import com.etm.entity.TreeEntity;
@Service("UserService")
public class UserServiceImpl implements UserService{
	@Resource
	private UserDao UserDao;
	public void editpassword(String user, String password) {
		UserDao.editpassword(user,password);
	}
	public String getpassword(String user) {
		return UserDao.getpassword(user);
	}
	public Integer login(String username, String password) {
		Integer count = UserDao.login(username, password);
		return count;
	}
	public List<TreeEntity> getTreeData() {
		List<Map<String,Object>> lst=UserDao.getTreeData();
		List<TreeEntity> newList=getChildren(lst);
		return newList;
	}
	public List<TreeEntity> getTreeDataByUser() {
		List<Map<String,Object>> lst=UserDao.getTreeDataByUser();
		List<TreeEntity> newList=getChildren(lst);
		return newList;
	}
	private List<TreeEntity> getChildren(List<Map<String,Object>> lst){
		
		List<TreeEntity> newList=new ArrayList<TreeEntity>();
		List<Map<String,Object>> lastList=new ArrayList<Map<String,Object>>();
		
		while(lst.size()>0){
			lastList.clear();
			for(Map<String,Object> map:lst){
				if(map.get("TR_MAIN").toString().equals(lst.get(0).get("TR_MAIN").toString())){
					TreeEntity tree=new TreeEntity();
					tree.setId(map.get("TR_IDENT").toString());
					
					tree.setText(map.get("TR_NAME").toString());
					tree.setAttributes(map);
					newList.add(tree);
				}else{
					lastList.add(map);
				}
			}
			for(TreeEntity c_tree:newList){
				List<TreeEntity> childrenList=getChildren2(c_tree.getId(),lastList);
				if(childrenList.size()>0){
					c_tree.getChildren().addAll(childrenList);
				}
			}
			
			if(lst.size()==0){
				break;
			}
			lst.clear();
			lst.addAll(lastList);
		}
		
		return newList;
	}
	private List<TreeEntity> getChildren2(String id,List<Map<String,Object>> lst){
		List<TreeEntity> newList=new ArrayList<TreeEntity>();
		List<Map<String,Object>> lastList=new ArrayList<Map<String,Object>>();
		for(Map<String,Object> map:lst){
			if(map.get("TR_MAIN").toString().equals(id)){
				TreeEntity tree=new TreeEntity();
				tree.setId(map.get("TR_IDENT").toString());
				tree.setText(map.get("TR_NAME").toString());
				tree.setAttributes(map);
				newList.add(tree);
			}else{
				lastList.add(map);
			}
		}
		
		if(lastList.size()>0){
			for(TreeEntity c_tree:newList){
				List<TreeEntity> childrenList=getChildren2(c_tree.getId(),lastList);
				if(childrenList.size()>0){
					c_tree.getChildren().addAll(childrenList);
				}
			}
		}
		lst.clear();
		lst.addAll(lastList);
		return newList;
	}

}
