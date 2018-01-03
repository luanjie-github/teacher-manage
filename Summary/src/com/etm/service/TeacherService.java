package com.etm.service;

import java.util.List;

import com.etm.entity.ComboboxEntity;
import com.etm.entity.LSEntity;

/**
 * 老师service
 * @Description: TODO
 * @ClassName: TeacherService 
 * @author guyue 
 * @date Dec 26, 2017 11:13:35 PM 
 *
 */
public interface TeacherService {

	List<ComboboxEntity> selectyx();

	List<ComboboxEntity> selectkc(String id);

	List<LSEntity> find(String kcid, String xm,String yxid);

	LSEntity findbyid(String ls_id);

	void editteacher(String id, String xm, String skdd, String kc, String sksj,
			String yx, String xl, String zc);

	void addteacher( String xm, String skdd, String kc, String sksj,
			String yx, String xl, String zc);

	void deleteteacher(String ls_id);

	List<ComboboxEntity> selectdkls();

	List<ComboboxEntity> selectdkjjb();

}
