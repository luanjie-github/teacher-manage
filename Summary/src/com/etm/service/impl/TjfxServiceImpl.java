package com.etm.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etm.dao.TjfxDao;
import com.etm.service.TjfxService;
@Service("TjfxService")
public class TjfxServiceImpl implements TjfxService {
	@Resource
	private TjfxDao TjfxDao;
	public List<Map<String, Object>> zctjfx() {
		return TjfxDao.zctjfx();
	}
	public List<Map<String, Object>> xltjfx() {
		return TjfxDao.xltjfx();
	}
	public List<Map<String, Object>> gztjfx() {
		return TjfxDao.gztjfx();
	}

}
