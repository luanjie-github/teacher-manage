package com.etm.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.etm.entity.ComboboxEntity;
import com.etm.entity.LSEntity;
import com.etm.service.TeacherService;
import com.etm.util.ETMActionSupport;


@Controller
@RequestMapping("/teacher")
public class TeacherController extends ETMActionSupport {
	@Resource
	private TeacherService TeacherService;
	@RequestMapping("selectyx")
	public void selectyx(){
		List<ComboboxEntity> entitylist = TeacherService.selectyx();
		responseJson(entitylist);
	}
	@RequestMapping("selectkc")
	public void selectkc(String id){
		List<ComboboxEntity> entitylist = TeacherService.selectkc(id);
		responseJson(entitylist);
	}
	@RequestMapping("find")
	public void find(String kcid,String xm,String yxid){
		List<LSEntity> entitylist = TeacherService.find(kcid,xm,yxid);
		responseJson(entitylist);
	}
	@RequestMapping("findbyid")
	public void findbyid(String ls_id){
		LSEntity entitylist = TeacherService.findbyid(ls_id);
		responseJson(entitylist);
	}
	@RequestMapping("editteacher")
	public void editteacher(String id,String xm,String skdd,String kc,
			String sksj,String yx,String xl,String zc){
		TeacherService.editteacher(id,xm,skdd,kc,sksj,yx,xl,zc);
	}
	@RequestMapping("addteacher")
	public void addteacher(String xm,String skdd,String kc,
			String sksj,String yx,String xl,String zc){
		TeacherService.addteacher(xm,skdd,kc,sksj,yx,xl,zc);
	}
	@RequestMapping("delteacher")
	public void deleteteacher(String ls_id){
		TeacherService.deleteteacher(ls_id);
	}
	@RequestMapping("selectdkls")
	public void selectdkls(){
		List<ComboboxEntity> entitylist = TeacherService.selectdkls();
		responseJson(entitylist);
	}
	@RequestMapping("selectdkjjb")
	public void selectdkjjb(){
		List<ComboboxEntity> entitylist = TeacherService.selectdkjjb();
		responseJson(entitylist);
	}
}
