CREATE SCHEMA api_musica;
USE api_musica;

CREATE TABLE canciones(
	id_cancion			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre				VARCHAR(30) NOT NULL,
    letra				TEXT NOT NULL
);

INSERT INTO canciones(nombre, letra)VALUES("Queen of California", "Goodbye cold, goodbye rain
Goodbye sorrow, goodbye shame
I'm headed out west with my headphones on
Boarded a flight with a song in the back of my soul
And no one knows
I just found out her ghost left town
The Queen of California is stepping down, down
Hello beauty, hello strange
Hello wonder, what's your name?
Looking for the sun that Neil Young hung
After the gold rush of 1971
I just found out her ghost left town
The Queen of California is stepping down, down
If you see her say, 'Hello'
Just don't tell me, 'I told you so'
Joni wrote Blue in her house by the sea
I gotta believe there's another color waiting on me
To set me free
I just found out her ghost left town
The Queen of California is stepping down, down");

INSERT INTO canciones(nombre, letra)VALUES("Let it be", "When I find myself in times of trouble, Mother Mary comes to me
Speaking words of wisdom, let it be
And in my hour of darkness she is standing right in front of me
Speaking words of wisdom, let it be
Let it be, let it be, let it be, let it be
Whisper words of wisdom, let it be
And when the broken hearted people living in the world agree
There will be an answer, let it be
For though they may be parted, there is still a chance that they will see
There will be an answer, let it be
Let it be, let it be, let it be, let it be
There will be an answer, let it be
Let it be, let it be, let it be, let it be
Whisper words of wisdom, let it be
Let it be, let it be, let it be, let it be
Whisper words of wisdom, let it be, be
And when the night is cloudy there is still a light that shines on me
Shinin' until tomorrow, let it be
I wake up to the sound of music, Mother Mary comes to me
Speaking words of wisdom, let it be
And let it be, let it be, let it be, let it be
Whisper words of wisdom, let it be
And let it be, let it be, let it be, let it be
Whisper words of wisdom, let it be");