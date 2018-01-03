package com.etm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etm.entity.GZEntity;
import com.etm.entity.KCEntity;
import com.etm.entity.YXEntity;

public interface SystemDao {

	List<YXEntity> find();

	void delete(@Param("yx_id")String yx_id);

	void addyx(@Param("yxmc")String yxmc);

	List<KCEntity> findkc();

	void deletekc(@Param("kc_id")String kc_id);

	void addkc(@Param("kcmc")String kcmc, 
			@Param("dkls")String dkls, @Param("yx")String yx);

	void editkc(@Param("kc_id")String kc_id);

	KCEntity selectkcbyid(@Param("kc_id")String kc_id);

	void editkc(@Param("kc_id")String kc_id, 
			@Param("kcmc")String kcmc, @Param("dkls")String dkls, 
			@Param("yx")String yx);

	List<GZEntity> findsalary();

	void deletesalary(@Param("ls_id")String ls_id);

	void addsalary(@Param("xm")String xm, @Param("dkjjb")Integer dkjjb, 
			@Param("jbgz")Integer jbgz, @Param("dksj")Integer dksj, @Param("zgz")Integer zgz);

	GZEntity findsalarybyid(String ls_id);

	void editsalary(@Param("ls_id")String ls_id, @Param("xm")String xm, 
			@Param("dkjjb")Integer dkjjb, @Param("jbgz")Integer jbgz,
			@Param("dksj")Integer dksj, @Param("zgz")Integer zgz);

}
