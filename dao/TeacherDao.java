package com.etm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etm.entity.ComboboxEntity;
import com.etm.entity.LSEntity;

public interface TeacherDao {

	List<ComboboxEntity> selectkc(@Param("id")String id);

	List<ComboboxEntity> selectyx();

	List<LSEntity> find(@Param("kcid")String kcid, 
			@Param("xm")String xm, @Param("yxid")String yxid);

	LSEntity findbyid(@Param("ls_id")String ls_id);

	void editteacher(@Param("id")String id, @Param("xm")String xm, @Param("skdd")String skdd,
			@Param("kc")String kc, @Param("sksj")String sksj,
			@Param("yx")String yx, @Param("xl")String xl, @Param("zc")String zc);

	void addteacher(@Param("xm")String xm, @Param("skdd")String skdd,
			@Param("kc")String kc, @Param("sksj")String sksj,
			@Param("yx")String yx, @Param("xl")String xl, @Param("zc")String zc);

	void deleteteacher(@Param("ls_id")String ls_id);

	List<ComboboxEntity> selectdkls();

	List<ComboboxEntity> selectdkjjb();

}
