DROP TABLE question_likes;
DROP TABLE replies;
DROP TABLE question_follows;
DROP TABLE questions;
DROP TABLE users;


PRAGMA foreign_keys = ON;


CREATE TABLE users (
    id INTEGER PRIMARY KEY, 
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body VARCHAR(255) NOT NULL,
    ass_author_id INTEGER NOT NULL,

    FOREIGN KEY (ass_author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    follower_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    replier_id INTEGER NOT NULL,
    reply_id INTEGER,
    body VARCHAR(255) NOT NULL,

    -- FOREIGN KEY (reply_id) REFERENCES replies(id),
    FOREIGN KEY (replier_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE question_likes (
    q_like TEXT,
    liker_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (liker_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);


INSERT INTO users
    (fname, lname)
VALUES
    ('Kyle', 'Moon'),
    ('Anisur', 'Khan'),
    ('Drama', 'Sticks'),
    ('Bobby', 'Tables');


INSERT INTO questions
    (title, body, ass_author_id)
VALUES 
    ('Food?', 'What is your favorite food?', (SELECT id FROM users WHERE fname = 'Kyle')),
    ('Color?', 'What is your favorite color?', (SELECT id FROM users WHERE fname = 'Anisur')),
    ('Animal?', 'What is your favortie animal?',(SELECT id FROM users WHERE fname = 'Drama')),
    ('Age?', 'How old are you?', (SELECT id FROM users WHERE fname = 'Bobby'));


INSERT INTO question_follows
    (follower_id, question_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'Kyle'), (SELECT id FROM questions WHERE title = 'Food?')),
    ((SELECT id FROM users WHERE fname = 'Anisur'), (SELECT id FROM questions WHERE title = 'Color?')),
    ((SELECT id FROM users WHERE fname = 'Drama'), (SELECT id FROM questions WHERE title = 'Animal?')),
    ((SELECT id FROM users WHERE fname = 'Bobby'), (SELECT id FROM questions WHERE title = 'Age?'));


INSERT INTO replies
    (question_id, title, replier_id, body, reply_id)
VALUES
    ((SELECT id FROM questions WHERE title = 'Food?'), (SELECT id FROM users WHERE users.fname = 'Bobby'), ('Spaghetti sucks.'), 4),
    ((SELECT id FROM questions WHERE title = 'Color?'), (SELECT id FROM users WHERE users.fname = 'Drama'), ('Blue sucks.'), 3),
    ((SELECT id FROM questions WHERE title = 'Animal?'), (SELECT id FROM users WHERE users.fname = 'Anisur'), ('Unicorns suck.'), 2),
    ((SELECT id FROM questions WHERE title = 'Age?'), (SELECT id FROM users WHERE users.fname = 'Kyle'), ('Being old sucks.'), 1),
    ((SELECT id FROM questions WHERE title = 'Food?'), (SELECT id FROM users WHERE users.fname = 'Bobby'), ('THIS IS A TEST, DO NOT PANIC...'), 7);



INSERT INTO question_likes
    (q_like, liker_id, question_id)
VALUES
    ("true", (SELECT id FROM users WHERE fname = 'Kyle'), (SELECT id FROM questions WHERE title = 'Food?')),
    ("true", (SELECT id FROM users WHERE fname = 'Anisur'), (SELECT id FROM questions WHERE title = 'Age?'));