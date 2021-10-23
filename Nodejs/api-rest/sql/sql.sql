/**
 * Banco de dados
 */
 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
	
CREATE TABLE IF NOT EXISTS application_users (
	uuid uuid DEFAULT uuid_generate_v4(),
	userName VARCHAR(40) NOT NULL,
	userPassword VARCHAR(255) NOT NULL,
		CONSTRAINTS pk_application_users PRIMARY KEY (uuid)
);


CREATE EXTENSION IF NOT EXISTS "pgcrypto";

INSERT INTO application_users (userName, userPassword) 
	VALUES ( 'admin', crypt('admin', 'my_salt') );