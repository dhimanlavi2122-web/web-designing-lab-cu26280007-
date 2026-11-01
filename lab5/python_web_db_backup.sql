-- MySQL Database Backup
-- Created: 2026-10-23 20:32:21.675437

CREATE DATABASE IF NOT EXISTS python_web_db;
USE python_web_db;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO users (id, name, email) VALUES ('2', 'Rahul', 'rahul@example.com');
INSERT INTO users (id, name, email) VALUES ('3', 'Priya', 'priya@example.com');
INSERT INTO users (id, name, email) VALUES ('4', 'lavisha', 'lavisha@example.com');
INSERT INTO users (id, name, email) VALUES ('5', 'lavisha', 'lavisha@example.com');
INSERT INTO users (id, name, email) VALUES ('6', 'Aman', 'aman@example.com');
INSERT INTO users (id, name, email) VALUES ('7', 'Neha', 'neha@example.com');
INSERT INTO users (id, name, email) VALUES ('8', 'Priya', 'priya@example.com');
