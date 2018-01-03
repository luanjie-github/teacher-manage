package com.etm.entity;
/**
 * 课程实体类
 * @author Administrator
 *
 */
public class KCEntity {
	private int kc_id;
	private String kcmc;
	private String dkls;
	private String yxmc;
	
	/**
	 * @return the yxmc
	 */
	public String getYxmc() {
		return yxmc;
	}
	/**
	 * @param yxmc the yxmc to set
	 */
	public void setYxmc(String yxmc) {
		this.yxmc = yxmc;
	}
	public int getKc_id() {
		return kc_id;
	}
	public void setKc_id(int kc_id) {
		this.kc_id = kc_id;
	}
	public String getKcmc() {
		return kcmc;
	}
	public void setKcmc(String kcmc) {
		this.kcmc = kcmc;
	}
	public String getDkls() {
		return dkls;
	}
	public void setDkls(String dkls) {
		this.dkls = dkls;
	}
	
}
