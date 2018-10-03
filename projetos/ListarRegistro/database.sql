CREATE DATABASE `geek` ;

CREATE TABLE `geek`.`autores` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `nome` TEXT NOT NULL ,
    `email` TEXT NOT NULL ,
    PRIMARY KEY ( `id` )
) ENGINE = InnoDB;

INSERT INTO `geek`.`autores` (`nome` ,`email`)
VALUES ('Jayr'  , 'jayr@clubedosgeeks.com.br'  )
      ,('Elias' , 'elias@clubedosgeeks.com.br' )
      ,('Champs', 'champs@clubedosgeeks.com.br');


