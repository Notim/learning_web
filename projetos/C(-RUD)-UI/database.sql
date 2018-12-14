DROP DATABASE site;

CREATE DATABASE site;
USE DATABASE site;

CREATE TABLE `site`.`User`(
	`id` INT NOT NULL AUTO_INCREMENT
	,`nome` TEXT NOT NULL
  ,`email` TEXT NOT NULL
  ,`senha` TEXT NOT NULL
  ,PRIMARY KEY ( `id` )
);

INSERT INTO `site`.`User`(`nome`, `email`, `senha`)
VALUES ('joao vitor paulino martins', 'paulino.joaovitor@yahoo.com.br', '123456')
