CREATE TABLE bdtesteuser.tbUser(
  PRIMARY KEY (ID)
	,ID int UNSIGNED ZEROFILL AUTO_INCREMENT
	,user_name varchar(100) CHARACTER SET utf8 NOT NULL COMMENT 'nome do ususario'
	,user_password varchar(255) CHARACTER SET utf8 NOT NULL COMMENT 'senha usuario'
	,user_email varchar(100) CHARACTER SET utf8 NOT NULL COMMENT 'email do ususario'
 );
 
 select * FROM tbUser
 
 DROP TABLE tbUser
 
 insert into tbUser(user_name, user_password, user_email) values ("joao vitor paulino", "123456", "paulino.joaovitor@yahoo.com.br")