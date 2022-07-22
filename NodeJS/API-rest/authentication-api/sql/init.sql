CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; /* para que o uuid funcione*/
CREATE EXTENSION IF NOT EXISTS "pgcrypto"; /* para usar o crypt e gerar senhas criptografadas - ESTUDAR*/

/* criando uma tabela */
CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

/* inserindo na tabela */
INSERT INTO application_user (username, password) VALUES ('Filipe', crypt('admin', 'my_salt'))