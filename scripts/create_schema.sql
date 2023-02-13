CREATE DATABASE blog_system;

CREATE TABLE `blog_system`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(45) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `excerpt` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));