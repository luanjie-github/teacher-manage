package com.etm.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etm.dao.SystemDao;
import com.etm.entity.GZEntity;
import com.etm.entity.KCEntity;
import com.etm.entity.YXEntity;
import com.etm.service.SystemService;

@Service("SystemService")
public class SystemServiceImpl implements SystemService{
	@Resource
	private SystemDao SystemDao;
	public List<YXEntity> find() {
		return SystemDao.find();
	}
	public void delete(String yx_id) {
		SystemDao.delete(yx_id);
	}
	public void addyx(String yxmc) {
		SystemDao.addyx(yxmc);
	}
	public List<KCEntity> findkc() {
		return SystemDao.findkc();
	}
	public void deletekc(String kc_id) {
		SystemDao.deletekc(kc_id);
	}
	public void addkc(String kcmc, String dkls, String yx) {
		SystemDao.addkc(kcmc,dkls,yx);
	}
	public KCEntity selectkcbyid(String kc_id) {
		return SystemDao.selectkcbyid(kc_id);
	}
	public void editkc(String kc_id, String kcmc, String dkls, String yx) {
		SystemDao.editkc(kc_id,kcmc,dkls,yx);
	}
	public List<GZEntity> findsalary() {
		return SystemDao.findsalary();
	}
	public void deletesalary(String ls_id) {
		SystemDao.deletesalary(ls_id);
	}
	public void addsalary(String xm, Integer dkjjb, Integer jbgz, Integer dksj, Integer zgz) {
		SystemDao.addsalary(xm,dkjjb,jbgz,dksj,zgz);
	}
	public GZEntity findsalarybyid(String ls_id) {
		return SystemDao.findsalarybyid(ls_id);
	}
	public void editsalary(String ls_id, String xm, Integer dkjjb,
			Integer jbgz, Integer dksj, Integer zgz) {
		SystemDao.editsalary(ls_id,xm,dkjjb,jbgz,dksj,zgz);
	}

}
