DROP DATABASE IF EXISTS `exam`;
CREATE DATABASE IF NOT EXISTS `exam`;
USE `exam`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
)
