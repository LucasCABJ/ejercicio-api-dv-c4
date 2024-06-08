CREATE SCHEMA api_musica;
USE api_musica;

CREATE TABLE canciones(
	id_cancion			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre				VARCHAR(30) NOT NULL,
    letra				TEXT NOT NULL
);