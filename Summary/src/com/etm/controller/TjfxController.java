package com.etm.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.etm.service.TjfxService;
import com.etm.util.ETMActionSupport;

/**
 * 统计分析Controller
 * @Description: TODO
 * @ClassName: TjfxController 
 * @author guyue 
 * @date Dec 27, 2017 9:57:12 AM 
 *
 */
@Controller
@RequestMapping("/tjfx")
public class TjfxController extends ETMActionSupport{
	@Resource
	private TjfxService TjfxService;
	@RequestMapping("zctjfx")
	public void zctjfx(){
		List<Map<String,Object>> list = TjfxService.zctjfx();
		responseJson(list);
	}
	@RequestMapping("xltjfx")
	public void xltjfx(){
		List<Map<String,Object>> list = TjfxService.xltjfx();
		responseJson(list);
	}
	@RequestMapping("gztjfx")
	public void gztjfx(){
		List<Map<String,Object>> list = TjfxService.gztjfx();
		responseJson(list);
	}
}
