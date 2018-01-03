package com.etm.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

/**
 * 同意异常处理
 * @author Administrator
 *
 */
public final class MyExceptionHandler implements HandlerExceptionResolver {
	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
		try {
			return null;
		} catch (Exception e) {
			LoggerFactory.getLogger(this.getClass()).warn(ex.toString());
			e.printStackTrace();
			return null;
		}
		
	}
}
