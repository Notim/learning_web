DROP DATABASE bdTestePDO;

CREATE DATABASE bdTestePDO;
USE DATABASE bdTestePDO;

CREATE TABLE `bdTestePDO`.`tbUser`(
	`id` INT NOT NULL AUTO_INCREMENT 
	,`nome` TEXT NOT NULL 
  ,`email` TEXT NOT NULL
  ,`senha` TEXT NOT NULL
  ,PRIMARY KEY ( `id` )
);

INSERT INTO `bdtestepdo`.`tbuser`(`nome`, `email`, `senha`) 
VALUES ('joao vitor paulino martins', 'paulino.joaovitor@yahoo.com.br', '123456')