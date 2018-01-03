package com.etm.service.impl;

import java.util.HashMap;
import java.util.Map;

public class DictionaryOperateUtil {
	public static Map<Integer,Integer> dkjjbMap = new HashMap<Integer,Integer>(){
		private static final long serialVersionUID = 1L;

		{
			put(1, 100);
			put(2, 90);
			put(3, 80);
			put(4, 70);
			put(5, 60);
			put(6, 50);
		}
	};
}
