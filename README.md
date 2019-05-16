# demo-srv
nodejs ts express mysql

服务端：
express-promise-router
mysql2 
body-parser 用于解析http请求数据

nodesjs require , import

客户端：
./static/antd-course 是参考 https://www.yuque.com/ant-design/course/wybhm9
创建的一个web客户端 antd react 项目

用户表 m_user
CREATE TABLE `m_order_course` (
  `id` char(32) NOT NULL DEFAULT '' COMMENT '课程订单表',
  `order_no` varchar(100) DEFAULT '' COMMENT '订单编号',
  `course_id` char(32) DEFAULT NULL COMMENT '课程id',
  `buyer_id` char(32) DEFAULT NULL COMMENT '购买用户的id',
  `num` int(11) DEFAULT '1' COMMENT '购买数量 默认1',
  `payment_mode` int(11) DEFAULT NULL COMMENT '支付方式 1支付宝 2微信',
  `total_amount` decimal(10,2) DEFAULT NULL COMMENT '订单总金额[实际支付]',
  `time_expire` timestamp NULL DEFAULT NULL COMMENT '绝对超时时间戳[必须在此时间之前支付]',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `course_end_time` bigint(30) DEFAULT NULL COMMENT '课程结束的时间戳',
  `status` int(11) DEFAULT NULL COMMENT '订单状态 0等待支付 1超时未支付 2支付成功 3支付失败 4已结算 5已退款',
  `trade_no` varchar(60) DEFAULT NULL COMMENT '支付宝订单号',
  `out_trade_no` varchar(50) DEFAULT NULL COMMENT '商家订单号',
  `coach_uid` char(100) DEFAULT NULL COMMENT '教练的userID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
