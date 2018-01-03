package com.etm.service;

import java.util.List;

import com.etm.entity.GZEntity;
import com.etm.entity.KCEntity;
import com.etm.entity.YXEntity;

public interface SystemService {

	List<YXEntity> find();

	void delete(String yx_id);

	void addyx(String yxmc);

	List<KCEntity> findkc();

	void deletekc(String kc_id);

	void addkc(String kcmc, String dkls, String yx);

	KCEntity selectkcbyid(String kc_id);

	void editkc(String kc_id, String kcmc, String dkls, String yx);

	List<GZEntity> findsalary();

	void deletesalary(String ls_id);

	void addsalary(String xm, Integer dkjjb, Integer jbgz, Integer dksj, Integer zgz);

	GZEntity findsalarybyid(String ls_id);

	void editsalary(String ls_id, String xm, Integer dkjjb, Integer jbgz,
			Integer dksj, Integer zgz);

}
