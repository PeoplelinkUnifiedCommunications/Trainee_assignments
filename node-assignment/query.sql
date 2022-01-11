-- SQLite
-- CREATE TABLE data (
--   name VARCHAR(200),
--   age INTEGER,
--   score INTEGER
-- );

-- PRAGMA TABLE_INFO(data);

-- -- SQLite

-- INSERT INTO
--   data (name, age, score)
-- VALUES
--   ("Rakesh", 39, 35),
--   ("Sai", 47, 30);
-- -- SQLited

SELECT * FROM data;

UPDATE
  data
SET
  score = 150
WHERE
  name = "Rakesh";

SELECT * FROM data;
