-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

DROP DATABASE IF EXISTS cows;

CREATE DATABASE IF NOT EXISTS cows;

USE cows;

CREATE TABLE IF NOT EXISTS cowlist (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(500) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO cowlist VALUES (null, 'Buttercup', 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.');

INSERT INTO cowlist VALUES (null, 'Daisy', 'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.');

INSERT INTO cowlist VALUES (null, 'Milkshake', 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.');