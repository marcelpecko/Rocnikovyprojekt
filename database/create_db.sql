DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS boarders CASCADE;
DROP TABLE IF EXISTS menus CASCADE;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name varchar (50) NOT NULL,
    surname varchar (50) NOT NULL,
    email varchar (50) NOT NULL,
    password varchar (50) NOT NULL
);

CREATE TABLE boarders (
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users ON DELETE CASCADE,
    name varchar (50) NOT NULL,
    surname varchar (50) NOT NULL,
    diet varchar (50) NOT NULL
);

CREATE TABLE menus (
    date TIMESTAMP NOT NULL,   
    boarder_id INTEGER REFERENCES boarders ON DELETE CASCADE,
    eat int
);

INSERT INTO users (name, surname, email, password) VALUES ('marcel', 'pecko', 'a@a.a', 'aaa');
INSERT INTO boarders (user_id, name, surname, diet) VALUES (1, 'A', 'B', 'bezlaktozova');
INSERT INTO menus (date, boarder_id, eat) VALUES ('now', 1 , NULL);
