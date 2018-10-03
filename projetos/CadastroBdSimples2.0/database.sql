create database bdSite

CREATE TABLE `bdSite`.`user`(
  `ID` INT NOT NULL AUTO_INCREMENT
  ,`nome` TEXT NOT NULL
  ,`email` TEXT NOT null
  ,`senha` TEXT NOT NULL
  ,PRIMARY KEY (`ID`)
);
