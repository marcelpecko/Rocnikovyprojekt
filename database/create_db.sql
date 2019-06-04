-- psql -U marcel97 -d marcel97 -a -f create_db.sql

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS boarders CASCADE;
DROP TABLE IF EXISTS menus CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    surname VARCHAR (50) NOT NULL,
    email VARCHAR (50) NOT NULL,
    password VARCHAR (50) NOT NULL
);

CREATE TABLE boarders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users ON DELETE CASCADE,
    name varchar (50) NOT NULL,
    surname varchar (50) NOT NULL,
    diet varchar (50) NOT NULL
);

CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    boarder_id INTEGER REFERENCES boarders ON DELETE CASCADE,
    week VARCHAR (50) NOT NULL,
    choices TEXT[] NOT NULL
);



INSERT INTO users (name, surname, email, password) VALUES ('marcel', 'pecko', 'a@a.a', 'aaa');
INSERT INTO users (name, surname, email, password) VALUES ('admin', 'admin', 'admin@admin.sk', 'aaa');
INSERT INTO boarders (user_id, name, surname, diet) VALUES (1, 'A', 'B', 'bezlaktozova');
