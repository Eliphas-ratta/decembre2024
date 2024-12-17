SELECT u.first_name,
b.title,
COUNT(bo.book_id)
FROM 
    user u
JOIN
borrow bo ON bo.user_id = u.id
JOIN 
book b ON bo.book_id = b.id
GROUP BY
u.id, bo.book_id
HAVING
COUNT(bo.book_id) > 1;




SELECT u.first_name,
COUNT(bo.book_id)
FROM 
    user u
JOIN
borrow bo ON bo.user_id = u.id
GROUP BY
u.id, 
HAVING
COUNT(bo.book_id) = 1;



-- MIN
-- MAX
-- AVG 
-- COUNT 
-- CURDATE() 
SELECT CURTIME(); 
SELECT NOW(); 
SELECT DATE_FORMAT(date_out, '%D/%M/%Y') FROM borrow;
SELECT DATE_FORMAT(date_out, '%D/%M/%Y %H:%i:%s') FROM borrow;

  SELECT MD5('HELLO');

  SELECT CONCAT(id,'-', first_name) AS user FROM user;

DELIMITER //

CREATE FUNCTION ConcatNameAndBook(first_name VARCHAR(30), id_book INT)
RETURNS VARCHAR(100)
DETERMINISTIC
BEGIN
    RETURN CONCAT(first_name, ' a emprunté le livre n° ', id_book);
END;//

DELIMITER ;

--appelle de la fontion 

SELECT ConcatNameAndBook(first_name, book_id) FROM user INNER JOIN borrow ON borrow.user_id = user.id;


// PROCÉDURE STOCKÉE (STORED PROCEDURES)

DELIMITER //
CREATE PROCEDURE booksNotBorrowedByUser(IN firstName VARCHAR(30))
BEGIN
    SELECT title  FROM book  WHERE id NOT IN (
    SELECT book_id FROM borrow WHERE user_id IN (
    SELECT id FROM user WHERE first_name = firstName )
    );
END //
DELIMITER;




//VUES
CREATE VIEW view_loan AS
SELECT u.first_name, b.title, bo.date_out FROM user u, book b, borrow bo
WHERE b.id = bo.book_id
AND u.id = bo.user_id;

//TABLES TEMPORAIRES

CREATE TEMPORARY TABLE loans2017 AS
SELECT u.first_name, b.title, bo.date_out FROM user u, book b, borrow bo
WHERE b.id = bo.book_id
AND u.id = bo.user_id
AND YEAR(bo.date_out) = 2017;

//TRANSACTIONS ET LES ROLLBACK EN SQL

TRANSACTION + COMMIT;
//3 PHASES
// INTERPRETATION
// EXECUTION
// RETOUR

START TRANSACTION;
SELECT * FROM employee;
UPDATE employee SET salary = 22000 WHERE id = 8;
SELECT * FROM employee;

COMMIT;

ou ROLLBACK

--- variables et des requetes réparées


-- SYSTEM VARIABLES

SHOW VARIABLES;
SELECT @@version;

-- USER VARIABLES

SET @school = "my school";
SELECT @school;

-- Analyse
-- Interpretation
PREPARE req FROM 'SELECT * FROM employees WHERE first_name = "Nathalie"';

-- Exécution
EXECUTE req;
EXECUTE req;
EXECUTE req;
EXECUTE req;
EXECUTE req;

-- 7 étapes
-- 15 étapes

PREPARE req2 FROM 'SELECT * FROM employees WHERE first_name = ?';
SET @employee2 = "Melanie";
EXECUTE req2 USING @employee2;

DROP PREPARE req2;