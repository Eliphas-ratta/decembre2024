


INSERT INTO users (name, email, password, created_at) VALUES
('Alice', 'alice@example.com', 'password123', '2024-01-01'),
('Saddam', 'hussein.saddam@example.com', 'underground', '2003-04-09'),
('Jeffrey', 'lolita.island@example.com', 'alwaysunder18', '2020-07-02'),
('Pdiddy', 'thebestpartyaround@rap.com', 'Milking22', '2024-04-07'),
('Hillary', 'plsdontleakmyaddress@usagov.com', 'qwerty', '2023-08-03'),
('Osama', 'john.doe@pakistan.com', 'ilovejapan', '2001-09-11'),
('Elon', 'elon.musk@space.com', 'spacex123', '2022-06-15'),
('Marie', 'marie.curie@science.com', 'radiation', '2024-02-20');

INSERT INTO categories (name) VALUES
('Technologie'),
('Histoire'),
('Voyage'),
('Événements'),
('Sécurité Informatique');

INSERT INTO comments (articles_id, users_id, content, created_at) VALUES
(11, 2, 'Très intéressant', '2024-01-03'),
(12, 3, 'Un bon résumé', '2003-04-11'),
(13, 3, 'J\'adorais visiter', '2020-07-15'),
(14, 5, 'Des conseils utiles', '2024-04-09'),
(15, 6, 'La sécurité ', '2023-08-06'),
(16, 7, 'cool', '2001-09-13'),
(17, 8, 'Mars', '2022-06-22'),
(18, 4, 'La science ', '2024-02-26'),
(19, 5, 'Une perspective .', '2023-08-21'),
(20, 1, 'Merci .', '2024-03-02');


INSERT INTO comments (articles_id, users_id, content, created_at) VALUES
(1, 2, 'Très intéressant, merci pour le partage !', '2024-01-03'),
(2, 3, 'Un bon résumé des batailles clés.', '2003-04-11'),
(3, 1, 'J\'adorerais visiter ces îles secrètes !', '2020-07-15'),
(4, 5, 'Des conseils utiles pour organiser des fêtes.', '2024-04-09'),
(5, 6, 'La sécurité est primordiale, merci.', '2023-08-06'),
(6, 7, 'Un article très détaillé sur la discrétion.', '2001-09-13'),
(7, 8, 'Mars, jy crois à fond !', '2022-06-22'),
(8, 4, 'La science avance tellement vite.', '2024-02-26'),
(9, 5, 'Une perspective historique très enrichissante.', '2023-08-21'),
(10, 1, 'Merci pour ces infos sur la médecine moderne.', '2024-03-02');



INSERT INTO users (name, email, password, created_at) VALUES

('Elon', 'elon.musk@space.com', 'spacex123', '2022-06-15'),
('Marie', 'marie.curie@science.com', 'radiation', '2024-02-20');

DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

DROP table_name; 

    -- Filtrez les commentaires par article, triés par date de création.

SELECT 
    comments.id AS comment_id,
    comments.content AS comment_content,
    comments.created_at AS comment_date,
    users.name AS author_name,
    articles.title AS article_title
FROM comments
JOIN users ON comments.users_id = users.id
JOIN articles ON comments.articles_id = articles.id
ORDER BY comments.created_at ASC;


    -- Le plus d'article 

    SELECT 
    comments.id AS comment_id,
    comments.content AS comment_content,
    comments.created_at AS comment_date,
    users.name AS author_name,
    articles.title AS article_title
FROM comments
JOIN users ON comments.users_id = users.id
JOIN articles ON comments.articles_id = articles.id
ORDER BY MAX(article) ASC;