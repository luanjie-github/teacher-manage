package com.etm.entity;
/**
 * 工资实体类
 * @author Administrator
 *
 */
public class GZEntity {
	private int gz_id;
	private int ls_id;
	private int zgz;
	private int dkjjb;
	private int jbgz;
	private float dksj;
	private String xm;
	
	/**
	 * @return the xm
	 */
	public String getXm() {
		return xm;
	}
	/**
	 * @param xm the xm to set
	 */
	public void setXm(String xm) {
		this.xm = xm;
	}
	public int getGz_id() {
		return gz_id;
	}
	public void setGz_id(int gz_id) {
		this.gz_id = gz_id;
	}
	public int getLs_id() {
		return ls_id;
	}
	public void setLs_id(int ls_id) {
		this.ls_id = ls_id;
	}
	public int getZgz() {
		return zgz;
	}
	public void setZgz(int zgz) {
		this.zgz = zgz;
	}
	public int getDkjjb() {
		return dkjjb;
	}
	public void setDkjjb(int dkjjb) {
		this.dkjjb = dkjjb;
	}
	public int getJbgz() {
		return jbgz;
	}
	public void setJbgz(int jbgz) {
		this.jbgz = jbgz;
	}
	/**
	 * @return the dksj
	 */
	public float getDksj() {
		return dksj;
	}
	/**
	 * @param dksj the dksj to set
	 */
	public void setDksj(float dksj) {
		this.dksj = dksj;
	}
	
}
