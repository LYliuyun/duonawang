/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5-1704

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-09-06 21:48:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `total` varchar(255) NOT NULL COMMENT '商品分类',
  `img` varchar(255) NOT NULL COMMENT '商品图片',
  `list` varchar(255) NOT NULL COMMENT '商品详情',
  `pirce` varchar(255) NOT NULL COMMENT '商品价格',
  `hot` varchar(255) DEFAULT NULL COMMENT '热门商品',
  `rebate` varchar(255) NOT NULL COMMENT '商品返利',
  `surplus` varchar(255) NOT NULL COMMENT '商品件数',
  `newimg` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '餐饮美食', 'img/01.jpg,img/m_01.jpg,img/m_02.jpg,img/m_03.jpg', '湘妃楼仅售价0.99元，享受湘妃楼消费满100元减15元', '15', 'true', '6.80', '861', 'img/0.1.jpg,img/0.2.png');
INSERT INTO `list` VALUES ('2', '美容保健', 'img/02.jpg,img/r_01.jpg,img/r_02.jpg', '自然美（采韵居）美容养生馆仅售价0.99元，享受原价398元自然美（采韵居）美容养生馆水娃娃美白嫩肤体验套餐', '340', 'true', '4.64', '452', 'img/1.1.jpg,img/1.2.png');
INSERT INTO `list` VALUES ('3', '休闲娱乐', 'img/03.jpg,img/x_01.jpg,img/x_02.jpg', '祥和酒店仅售价0.99元，享受原价198元/3小时时钟房套餐：（住宿+宽带上网）', '50', 'true', '7.04', '698', 'img/2.1.jpg,img/2.2.png');
INSERT INTO `list` VALUES ('4', '餐饮美食', 'img/04.jpg,img/m_11.jpg,img/m_12.jpg', '\r\n贵州风味仅售价0.99元，享受贵州风味消费满100元减20元的大优惠', '20', 'true', '8', '456', 'img/3.1.jpg,img/3.2.png');
INSERT INTO `list` VALUES ('5', '休闲娱乐', 'img/05.jpg,img/05.jpg,img/05.jpg,img/05.jpg', '源缘度假山庄仅售价0.99元，享受原价159元真人CS野战套餐：（真人CS野战+彩弹50发）', '70', 'true', '7.12', '651', 'img/4.1.jpg,img/4.2.png');
INSERT INTO `list` VALUES ('6', '生活服务', 'img/06.jpg,img/06.jpg,img/06.jpg,img/06.jpg', '【窃听器】偷听器', '0', null, '0', '0', '');
INSERT INTO `list` VALUES ('7', '生活服务', 'img/07.jpg,img/07.jpg,img/07.jpg,img/07.jpg', '【窃听器】追踪器', '0', null, '0', '11', '');
INSERT INTO `list` VALUES ('8', '生活服务', 'img/08.jpg,img/08.jpg,img/08.jpg,img/08.jpg', '【窃听器】窃听器', '0', null, '0', '20', '');
INSERT INTO `list` VALUES ('9', '美容保健', 'img/09.jpg,img/09.jpg,img/09.jpg,img/09.jpg', '\r\n自然美（采韵居）美容养生馆仅售价0.99元，享受原价298元自然美（采韵居）美容养生馆眼部拨筋套餐', '250', null, '3.84', '525', '');
INSERT INTO `list` VALUES ('10', '美容保健', 'img/10.jpg,img/10.jpg,img/10.jpg,img/10.jpg', '自然美（采韵居）美容养生馆仅售价0.99元，享受原价398元自然美（采韵居）美容养生馆中医养生套餐', '340', null, '4.64', '452', '');
INSERT INTO `list` VALUES ('11', '美容保健', 'img/11.jpg,img/11.jpg,img/11.jpg,img/11.jpg', '自然美（采韵居）美容养生馆仅售价0.99元，享受原价398元自然美（采韵居）美容养生馆美胸疏通体验套餐', '340', null, '4.64', '368', '');
INSERT INTO `list` VALUES ('12', '美容保健', 'img/12.jpg,img/12.jpg,img/12.jpg,img/12.jpg', '海豚湾美甲仅售价0.99元，享受海豚湾美甲1次任意消费满300元优惠套餐：送修护脚部1次+送价值60元的手部或脚部护理一次', '0', null, '24', '652', '');
INSERT INTO `list` VALUES ('13', '美容保健', 'img/13.jpg,img/13.jpg,img/13.jpg,img/13.jpg', '海豚湾美甲仅售价0.99元，享受原价200元起海豚湾美甲沿长光疗美甲套餐：（沿长光疗美甲+送价值60元的手部护理）', '30', null, '13.60', '469', '');
INSERT INTO `list` VALUES ('14', '美容保健', 'img/14.jpg,img/14.jpg,img/14.jpg,img/14.jpg', '海豚湾美甲仅售价0.99元，享受原价200元起海豚湾美甲沿长光疗美甲套餐：（沿长光疗美甲+送价值60元的手部护理）', '30', null, '7.20', '14', '');
INSERT INTO `list` VALUES ('15', '美容保健', 'img/15.jpg,img/15.jpg,img/15.jpg,img/15.jpg', '海豚湾美甲 仅售价0.99元，享受原价130元海豚湾美甲芭比美甲+修护手脚部套餐：（芭比美甲+修护手脚+送手腊1次）', '30', null, '8', '469', '');
INSERT INTO `list` VALUES ('16', '美容保健', 'img/16.jpg', '海豚湾美甲仅售价0.99元，享受原价80元海豚湾美甲芭比美甲+修护脚部套餐：（芭比美甲+修护脚部+送1次手部修护）', '10', null, '3.20', '456', '');
INSERT INTO `list` VALUES ('17', '美容保健', 'img/17.jpg', '海豚湾美甲仅售价0.99元，享受原价50元海豚湾美甲芭比美甲大优惠套餐：（芭比美甲+修护手部）', '10', null, '3.20', '563', '');
INSERT INTO `list` VALUES ('18', '餐饮美食', 'img/18.jpg', '陕川味道仅售价0.99元，享受陕川味道消费满200元减10元优惠', '10', 'style', '0', '320', '');
INSERT INTO `list` VALUES ('19', '餐饮美食', 'img/19.jpg', '东方国际饭店-东方阁西餐厅仅0.99元，享受东方国际饭店-东方阁西餐厅任何消费：8折优惠', '45', null, '18.30', '567', '');
INSERT INTO `list` VALUES ('20', '美容保健', 'img/20.jpg', '博密思仅售价0.99元，享受原价680元博密思纤体塑形套餐：（背部淋巴排毒一次+刷疗塑形一次）', '612', null, '5.44', '469', '');
INSERT INTO `list` VALUES ('21', '美容保健', 'img/21.jpg', '博密思仅售价0.99元，享受原价480元博密思艾灸养生套餐：（艾灸养生护理1次+刮痧拔罐1次 全程85分钟）', '412', null, '5.44', '563', '');
INSERT INTO `list` VALUES ('22', '美容保健', 'img/22.jpg', '博密思仅售价0.99元，享受原价980元博密思夏日之旅套餐：（面部银杏排毒1次+面部排毒次+舒缓减压肩颈护理次）全程135分钟', '892', null, '7.04', '634', '');
INSERT INTO `list` VALUES ('23', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('24', '休闲娱乐', 'img/24.jpg', '醉吧黎西餐厅仅售价0.99元，享受醉吧黎西餐厅消费满100元减20元', '20', null, '8', '632', '');
INSERT INTO `list` VALUES ('25', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('26', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('27', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('28', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('29', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('30', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('31', '休闲娱乐', 'img/25.jpg', '东方国旅仅售价0.99元，享受原价285元 长鹿农庄一日游套餐：（长鹿休闲度假村+机动游乐主题公园+水世界主题公园+农家乐主题公园+动物主题公园+豪华旅游空调车接送+景点大门票+旅游团体保险）', '186', null, '7.92', '2458', '');
INSERT INTO `list` VALUES ('32', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('33', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', '', '24', '455', '');
INSERT INTO `list` VALUES ('34', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('35', '生活服务', 'img/26.jpg', '纤丽媛仅0.99元购买此代金券，消费满100元以上即减4元', '4', null, '8', '428', '');
INSERT INTO `list` VALUES ('36', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('37', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', '', '24', '455', '');
INSERT INTO `list` VALUES ('38', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('39', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('40', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('41', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', 'style', '24', '455', '');
INSERT INTO `list` VALUES ('42', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('43', '生活服务', 'img/27.jpg', '智达齿科仅0.99元购买此代金券，消费满100元以上即减4元', '4', null, '8', '627', '');
INSERT INTO `list` VALUES ('56', '餐饮美食', 'img/30.jpg', '灜滨寿司仅售价0.99元，享受灜滨寿司代金券，消费满30元减5元', '5', null, '2.40', '3205', '');
INSERT INTO `list` VALUES ('44', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('45', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', 'style', '24', '455', '');
INSERT INTO `list` VALUES ('46', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('47', '生活服务', 'img/28.jpg', '美赛施内衣仅0.99元购买此代金券，消费满100元以上即减20元', '20', null, '8', '566', '');
INSERT INTO `list` VALUES ('48', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('49', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('50', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('51', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('52', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('53', '餐饮美食', 'img/29.jpg', '乐芝味蛋糕西饼DIY烘培店仅售价0.99元，享受DIY蛋糕代金券，消费满100元减15元', '15', null, '6.80', '4501', '');
INSERT INTO `list` VALUES ('55', '餐饮美食', 'img/30.jpg', '灜滨寿司仅售价0.99元，享受灜滨寿司代金券，消费满30元减5元', '5', null, '2.40', '3205', '');
INSERT INTO `list` VALUES ('54', '美容保健', 'img/23.jpg', '芊艺莱仅售价0.99元，享受原价480元芊艺莱凡开通超值会员卡消费九折优惠套餐：（价值300元会员卡+价值180元直烫染发任一项）', '180', null, '24', '455', '');
INSERT INTO `list` VALUES ('57', '餐饮美食', 'img/30.jpg', '灜滨寿司仅售价0.99元，享受灜滨寿司代金券，消费满30元减5元', '5', null, '2.40', '3205', '');
INSERT INTO `list` VALUES ('58', '餐饮美食', 'img/30.jpg', '灜滨寿司仅售价0.99元，享受灜滨寿司代金券，消费满30元减5元', '5', null, '2.40', '3205', '');
INSERT INTO `list` VALUES ('59', '餐饮美食', 'img/30.jpg', '灜滨寿司仅售价0.99元，享受灜滨寿司代金券，消费满30元减5元', '5', null, '2.40', '3205', '');
INSERT INTO `list` VALUES ('60', '休闲娱乐', 'img/24.jpg', '醉吧黎西餐厅仅售价0.99元，享受醉吧黎西餐厅消费满100元减20元', '20', 'style', '8', '632', '');
INSERT INTO `list` VALUES ('61', '休闲娱乐', 'img/24.jpg', '醉吧黎西餐厅仅售价0.99元，享受醉吧黎西餐厅消费满100元减20元', '20', null, '8', '632', '');
INSERT INTO `list` VALUES ('62', '休闲娱乐', 'img/24.jpg', '醉吧黎西餐厅仅售价0.99元，享受醉吧黎西餐厅消费满100元减20元', '20', null, '8', '632', '');
INSERT INTO `list` VALUES ('63', '餐饮美食', 'img/04.jpg,img/m_11.jpg,img/m_12.jpg', '\r\n贵州风味仅售价0.99元，享受贵州风味消费满100元减20元的大优惠', '20', 'true', '8', '456', 'img/3.1.jpg,img/3.2.png');
INSERT INTO `list` VALUES ('64', '餐饮美食', 'img/04.jpg,img/m_11.jpg,img/m_12.jpg', '\r\n贵州风味仅售价0.99元，享受贵州风味消费满100元减20元的大优惠', '20', 'true', '8', '456', 'img/3.1.jpg,img/3.2.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0000000004', '17688881704', '5b1b68a9abf4d2cd155c81a9225fd158', '2017-09-01 15:29:13');
INSERT INTO `user` VALUES ('0000000008', '17688881707', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:31:10');
INSERT INTO `user` VALUES ('0000000021', '17688881709', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:47:09');
INSERT INTO `user` VALUES ('0000000028', '17688881715', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:54:57');
INSERT INTO `user` VALUES ('0000000023', '17688881710', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:49:17');
INSERT INTO `user` VALUES ('0000000024', '17688881717', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:50:12');
INSERT INTO `user` VALUES ('0000000029', '17688881716', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:55:45');
INSERT INTO `user` VALUES ('0000000015', '17688881708', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:31:23');
INSERT INTO `user` VALUES ('0000000016', '17688881711', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:31:50');
INSERT INTO `user` VALUES ('0000000017', '17688881712', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:33:02');
INSERT INTO `user` VALUES ('0000000019', '17688881701', 'f379eaf3c831b04de153469d1bec345e', '2017-09-01 15:40:50');
SET FOREIGN_KEY_CHECKS=1;
