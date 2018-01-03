/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50710
Source Host           : localhost:3306
Source Database       : etm

Target Server Type    : MYSQL
Target Server Version : 50710
File Encoding         : 65001

Date: 2017-12-27 12:05:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for etm_gz
-- ----------------------------
DROP TABLE IF EXISTS `etm_gz`;
CREATE TABLE `etm_gz` (
  `zgz` int(11) DEFAULT NULL COMMENT '总工资',
  `dkjjb` int(11) DEFAULT NULL COMMENT '代课金级别',
  `jbgz` int(11) DEFAULT NULL COMMENT '基本工资',
  `ls_id` int(11) DEFAULT NULL COMMENT '老师id',
  `gz_id` int(20) NOT NULL AUTO_INCREMENT COMMENT '工资id',
  `dksj` int(11) DEFAULT NULL COMMENT '代课数量',
  KEY `primary_gz` (`gz_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of etm_gz
-- ----------------------------
INSERT INTO `etm_gz` VALUES ('6000', '1', '3000', '1', '1', '30');
INSERT INTO `etm_gz` VALUES ('5600', '2', '2900', '2', '2', '30');
INSERT INTO `etm_gz` VALUES ('5200', '3', '2800', '3', '3', '30');
INSERT INTO `etm_gz` VALUES ('4800', '4', '2700', '4', '4', '30');
INSERT INTO `etm_gz` VALUES ('4400', '5', '2600', '5', '5', '30');
INSERT INTO `etm_gz` VALUES ('4000', '6', '2500', '6', '6', '30');

-- ----------------------------
-- Table structure for etm_kc
-- ----------------------------
DROP TABLE IF EXISTS `etm_kc`;
CREATE TABLE `etm_kc` (
  `kc_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '课程id',
  `kcmc` varchar(255) DEFAULT NULL COMMENT '课程名称',
  `dkls` varchar(255) DEFAULT NULL COMMENT '代课老师',
  `yx_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`kc_id`),
  KEY `primary_kc` (`kc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of etm_kc
-- ----------------------------
INSERT INTO `etm_kc` VALUES ('1', 'MYSQL', '张三', '1');
INSERT INTO `etm_kc` VALUES ('2', '.net', '李四', '1');
INSERT INTO `etm_kc` VALUES ('3', 'java', '王五', '1');
INSERT INTO `etm_kc` VALUES ('4', 'c#', '马六', '1');
INSERT INTO `etm_kc` VALUES ('5', 'php', '田七', '1');
INSERT INTO `etm_kc` VALUES ('6', '英语', 'rose', '2');
INSERT INTO `etm_kc` VALUES ('7', '计算机与科学', '张三', '1');

-- ----------------------------
-- Table structure for etm_ls
-- ----------------------------
DROP TABLE IF EXISTS `etm_ls`;
CREATE TABLE `etm_ls` (
  `ls_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '老师id',
  `xm` varchar(255) DEFAULT NULL COMMENT '姓名',
  `yx_id` int(11) DEFAULT NULL COMMENT '院系id',
  `zc` varchar(255) DEFAULT NULL COMMENT '职称',
  `kch` int(11) DEFAULT NULL COMMENT '课程号',
  `skdd` varchar(255) DEFAULT NULL COMMENT '授课地点',
  `sksj` varchar(255) DEFAULT NULL COMMENT '授课时间',
  `xl` varchar(255) DEFAULT NULL COMMENT '学历',
  KEY `primary_ls` (`ls_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of etm_ls
-- ----------------------------
INSERT INTO `etm_ls` VALUES ('1', '张三', '2', '高级', '1', '203室', 'am', '博士');
INSERT INTO `etm_ls` VALUES ('2', '李四', '1', '副高级', '2', '101室', 'pm', '硕士');
INSERT INTO `etm_ls` VALUES ('3', '王五', '1', '中级', '3', '204室', 'am', '硕士');
INSERT INTO `etm_ls` VALUES ('4', '马六', '1', '中级', '4', '102室', 'am', '研究生');
INSERT INTO `etm_ls` VALUES ('5', '田七', '1', '中级', '5', '201室', 'pm', '研究生');
INSERT INTO `etm_ls` VALUES ('6', 'rose', '2', '高级', '6', '101室', 'am', '研究生');
INSERT INTO `etm_ls` VALUES ('7', '钱八', '1', '初级', '1', '808室', 'am', '本科');
INSERT INTO `etm_ls` VALUES ('8', '赵九', '1', '初级', '1', '707室', 'am', '本科');

-- ----------------------------
-- Table structure for etm_tree
-- ----------------------------
DROP TABLE IF EXISTS `etm_tree`;
CREATE TABLE `etm_tree` (
  `TR_IDENT` int(11) DEFAULT NULL,
  `TR_NAME` varchar(50) DEFAULT NULL,
  `TR_MAIN` int(11) DEFAULT NULL,
  `TR_TYPE` int(11) DEFAULT NULL,
  `TR_ORDER` int(11) DEFAULT NULL,
  `TR_HREF` varchar(100) DEFAULT NULL,
  `TR_ICON` varchar(100) DEFAULT NULL,
  `TR_BG` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of etm_tree
-- ----------------------------
INSERT INTO `etm_tree` VALUES ('5', '系统管理', '0', '2', '5', null, 'xtgl.png', null);
INSERT INTO `etm_tree` VALUES ('6', '修改密码', '5', '1', '6', 'page/user/edituser.jsp', 'xtgl.png', null);
INSERT INTO `etm_tree` VALUES ('1', '外聘教师管理', '0', '2', '1', null, 'shenjiju.png', '1');
INSERT INTO `etm_tree` VALUES ('2', '教师信息查询', '1', '1', '2', 'page/teacher/queryteacher.jsp', 'shenjiju.png', '1');
INSERT INTO `etm_tree` VALUES ('3', '教师信息管理', '1', '1', '3', 'page/teacher/processteacher.jsp', 'shenjiju.png', null);
INSERT INTO `etm_tree` VALUES ('4', '教师工资管理', '5', '1', '4', 'page/system/processsalary.jsp', 'shenjiju.png', null);
INSERT INTO `etm_tree` VALUES ('8', '系部信息管理', '5', '1', '8', 'page/system/processsystem.jsp', 'sjgl.png', null);
INSERT INTO `etm_tree` VALUES ('7', '课程信息管理', '5', '1', '7', 'page/system/processcourses.jsp', 'caizhengju.png', null);
INSERT INTO `etm_tree` VALUES ('9', '统计分析', '0', '2', '9', null, 'czjcx.png', null);
INSERT INTO `etm_tree` VALUES ('10', '职称统计分析', '9', '1', '10', 'page/tjfx/zctjfx.jsp', 'czjcx.png', null);
INSERT INTO `etm_tree` VALUES ('11', '学历统计分析', '9', '1', '11', 'page/tjfx/xltjfx.jsp', 'czjcx.png', null);
INSERT INTO `etm_tree` VALUES ('12', '工资统计分析', '9', '1', '12', 'page/tjfx/gztjfx.jsp', 'czjcx.png', null);

-- ----------------------------
-- Table structure for etm_treerole
-- ----------------------------
DROP TABLE IF EXISTS `etm_treerole`;
CREATE TABLE `etm_treerole` (
  `SR_IDENT` int(11) DEFAULT NULL,
  `TR_IDENT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of etm_treerole
-- ----------------------------

-- ----------------------------
-- Table structure for etm_user
-- ----------------------------
DROP TABLE IF EXISTS `etm_user`;
CREATE TABLE `etm_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `userrole` int(11) DEFAULT NULL COMMENT '用户权限',
  PRIMARY KEY (`user_id`),
  KEY `primary_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of etm_user
-- ----------------------------
INSERT INTO `etm_user` VALUES ('1', 'Admin', '123456', '1');
INSERT INTO `etm_user` VALUES ('2', 'ls', '111111', '2');

-- ----------------------------
-- Table structure for etm_yx
-- ----------------------------
DROP TABLE IF EXISTS `etm_yx`;
CREATE TABLE `etm_yx` (
  `yx_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '院系id',
  `yxmc` varchar(255) DEFAULT NULL COMMENT '院系名称',
  PRIMARY KEY (`yx_id`),
  KEY `primary_yx` (`yx_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of etm_yx
-- ----------------------------
INSERT INTO `etm_yx` VALUES ('1', '计算机系');
INSERT INTO `etm_yx` VALUES ('2', '外语系');
INSERT INTO `etm_yx` VALUES ('3', '艺术系');
