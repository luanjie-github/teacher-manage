package com.etm.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 导航条实体类
 * @author tianjixiang
 */
public class TreeEntity {
	private String id="";
	private String text="";
	private String iconCls="";
	private String state="";
	private boolean checked=false;
	private Map<String,Object> attributes;
	private List<TreeEntity> children=new ArrayList<TreeEntity>();
	
	
	
	
	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	public Map<String, Object> getAttributes() {
		return attributes;
	}
	public void setAttributes(Map<String, Object> attributes) {
		this.attributes = attributes;
	}
	public List<TreeEntity> getChildren() {
		return children;
	}
	public void setChildren(List<TreeEntity> children) {
		this.children = children;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getIconCls() {
		return iconCls;
	}
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	 
}
