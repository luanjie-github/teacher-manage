package com.etm.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etm.dao.TeacherDao;
import com.etm.entity.ComboboxEntity;
import com.etm.entity.LSEntity;
import com.etm.service.TeacherService;
@Service("TeacherService")
public class TeacherServiceImpl implements TeacherService {
	@Resource
	private TeacherDao TeacherDao;
	public List<ComboboxEntity> selectkc(String id) {
		
		return TeacherDao.selectkc(id);
	}

	public List<ComboboxEntity> selectyx() {
		return TeacherDao.selectyx();
	}

	public List<LSEntity> find(String kcid, String xm,String yxid) {
		return TeacherDao.find(kcid,xm,yxid);
	}

	public LSEntity findbyid(String ls_id) {
		return TeacherDao.findbyid(ls_id);
	}

	public void editteacher(String id, String xm, String skdd, String kc,
			String sksj, String yx, String xl, String zc) {
		TeacherDao.editteacher(id,xm,skdd,kc,sksj,yx,xl,zc);
	}

	public void addteacher( String xm, String skdd, String kc,
			String sksj, String yx, String xl, String zc) {
		TeacherDao.addteacher(xm,skdd,kc,sksj,yx,xl,zc);
	}

	public void deleteteacher(String ls_id) {
		TeacherDao.deleteteacher(ls_id);
	}

	public List<ComboboxEntity> selectdkls() {
		return TeacherDao.selectdkls();
	}

	public List<ComboboxEntity> selectdkjjb() {
		return TeacherDao.selectdkjjb();
	}

}
