package com.etm.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.etm.entity.GZEntity;
import com.etm.entity.KCEntity;
import com.etm.entity.YXEntity;
import com.etm.service.SystemService;
import com.etm.service.impl.DictionaryOperateUtil;
import com.etm.util.ETMActionSupport;

@Controller
@RequestMapping("/system")
public class SystemController extends ETMActionSupport{
	@Resource
	private SystemService SystemService;
	@RequestMapping("find")
	public void find(){
		List<YXEntity>entity = SystemService.find();
		responseJson(entity);
	}
	@RequestMapping("delete")
	public void delete(String yx_id){
		SystemService.delete(yx_id);
	}
	@RequestMapping("addyx")
	public void addyx(String yxmc){
		SystemService.addyx(yxmc);
	}
	@RequestMapping("findkc")
	public void findkc(){
		List<KCEntity>entity = SystemService.findkc();
		responseJson(entity);
	}
	@RequestMapping("deletekc")
	public void deletekc(String kc_id){
		SystemService.deletekc(kc_id);
	}
	@RequestMapping("addkc")
	public void addkc(String kcmc,String dkls,String yx){
		SystemService.addkc(kcmc,dkls,yx);
	}
	@RequestMapping("selectkcbyid")
	public void selectkcbyid(String kc_id){
		KCEntity entity = SystemService.selectkcbyid(kc_id);
		responseJson(entity);
	}
	@RequestMapping("editkc")
	public void editkc(String kc_id,String kcmc,String dkls,String yx){
		SystemService.editkc(kc_id,kcmc,dkls,yx);
	}
	@RequestMapping("findsalary")
	public void findsalary(){
		List<GZEntity>entity = SystemService.findsalary();
		responseJson(entity);
	}
	@RequestMapping("deletesalary")
	public void deletesalary(String ls_id){
		SystemService.deletesalary(ls_id);
	}
	@RequestMapping("addsalary")
	public void addsalary(String xm,Integer dkjjb,Integer jbgz,Integer dksj){
		Integer dkjbj = DictionaryOperateUtil.dkjjbMap.get(dkjjb);
		Integer zgz = jbgz+dkjbj*dksj;
		SystemService.addsalary(xm,dkjjb,jbgz,dksj,zgz);
	}
	@RequestMapping("findsalarybyid")
	public void findsalarybyid(String ls_id){
		GZEntity entity = SystemService.findsalarybyid(ls_id);
		responseJson(entity);
	}
	@RequestMapping("editsalary")
	public void editsalary(String ls_id,String xm,Integer dkjjb,Integer jbgz,Integer dksj){
		Integer dkjbj = DictionaryOperateUtil.dkjjbMap.get(dkjjb);
		Integer zgz = jbgz+dkjbj*dksj;
		SystemService.editsalary(ls_id,xm,dkjjb,jbgz,dksj,zgz);
	}
}
