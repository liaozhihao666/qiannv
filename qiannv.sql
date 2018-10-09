-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-20 09:07:26
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qiannv1`
--

-- --------------------------------------------------------

--
-- 表的结构 `laptop`
--

CREATE TABLE `laptop` (
  `lid` int(11) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `laptop`
--

INSERT INTO `laptop` (`lid`, `title`, `price`) VALUES
(1, '网易充值一卡通-账号直充10元100点', '9.80'),
(2, '网易充值一卡通-账号直充50元500点', '49.00'),
(3, '网易充值一卡通-账号直充100元1000点', '98.00'),
(4, '网易充值一卡通   -账号直充1000元10000点', '980.00'),
(5, '网易直营魔兽世界点卡30天月卡wow游戏账号直充暴雪战网国服', '75.00'),
(6, '网易炉石传说-60点奥数之尘赠经典卡包60包直充', '388.00'),
(7, '网易暗黑破坏神3：夺魂之镰典藏包', '388.00');

-- --------------------------------------------------------

--
-- 表的结构 `laptop_pic`
--

CREATE TABLE `laptop_pic` (
  `pid` int(11) NOT NULL,
  `laptop_id` int(11) DEFAULT NULL,
  `shangping` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `laptop_pic`
--

INSERT INTO `laptop_pic` (`pid`, `laptop_id`, `shangping`) VALUES
(1, 1, 'images/shangping/shangping1.jpg'),
(2, 2, 'images/shangping/shangping2.jpg'),
(3, 3, 'images/shangping/shangping3.jpg'),
(4, 4, 'images/shangping/shangping4.jpg'),
(5, 5, 'images/shangping/shangping5.jpg'),
(6, 6, 'images/shangping/shangping6.jpg'),
(7, 7, 'images/shangping/shangping7.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `img_url`, `title`, `time`) VALUES
(1, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告] 《新倩女幽魂》更新公告（版本3.0.145）', '[2018/06/10]'),
(2, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告] 6月7日服务器合并投票结果公告', '[2018/06/08]'),
(3, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[新闻] 本周更新关键字【童心】缤纷好礼庆六一', '[2018/06/07]'),
(4, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告] 《新倩女幽魂》更新公告（版本3.0.144）', '[2018/06/07]'),
(5, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告] 《新倩女幽魂》更新公告（版本3.0.143）', '[2018/06/05]'),
(6, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[新闻] 周年盛典-522我爱2次元', '[2018/06/04]'),
(7, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[新闻] 震惊！新倩女幽魂系平行世界突破玄幻网游想象极限', '[2018/06/03]'),
(8, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告] 5月24日服务器合并投票结果公告', '[2018/06/02]'),
(9, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[新闻] 本周更新关键词【520】浪漫花雨诉爱意', '[2018/06/02]'),
(10, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[新闻]《新倩女幽魂》七周年福利全曝光！丰富豪礼等你拿！', '[2018/06/01]'),
(11, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告]《新倩女幽魂》更新公告（版本3.0.129）', '[2018/05/10]'),
(12, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告]《新倩女幽魂》更新公告（版本3.0.128）', '[2018/05/09]'),
(13, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告]《新倩女幽魂》更新公告（版本3.0.127）', '[2018/05/08]'),
(14, 'C:Usersweb-01Desktop个人项目2images\news-button.png', '[公告]《新倩女幽魂》更新公告（版本3.0.126）', '[2018/05/07]');

-- --------------------------------------------------------

--
-- 表的结构 `shoppingcart_item`
--

CREATE TABLE `shoppingcart_item` (
  `iid` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `is_checked` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shoppingcart_item`
--

INSERT INTO `shoppingcart_item` (`iid`, `user_id`, `product_id`, `count`, `is_checked`) VALUES
(9, 5, 3, 1, 0),
(10, 6, 5, 2, 0),
(11, 6, 1, 9, 0);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `uname`, `upwd`, `email`, `phone`) VALUES
(1, 'wenda', '123456', '1547425504@qq.com', '288459'),
(2, 'fangfang', '123456', '1547425504@qq.com', '288459'),
(3, 'jiahao', '123456', '1547425504@qq.com', '288459'),
(4, 'ritian', '123456', '1547425504@qq.com', '288459'),
(5, 'xixixi', '123456', '1547425504@qq.com', '1837000000'),
(6, 'dingding', '123456', '1321316@qq.com', '15498496416');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `laptop`
--
ALTER TABLE `laptop`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `laptop_pic`
--
ALTER TABLE `laptop_pic`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shoppingcart_item`
--
ALTER TABLE `shoppingcart_item`
  ADD PRIMARY KEY (`iid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `laptop`
--
ALTER TABLE `laptop`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- 使用表AUTO_INCREMENT `laptop_pic`
--
ALTER TABLE `laptop_pic`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=297;
--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- 使用表AUTO_INCREMENT `shoppingcart_item`
--
ALTER TABLE `shoppingcart_item`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

