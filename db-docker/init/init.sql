CREATE DATABASE IF NOT EXISTS todoapp_db;
USE todoapp_db;
CREATE TABLE IF NOT EXISTS todos (
    id INT NOT NUll PRIMARY KEY AUTO_INCREMENT,
    description varchar(255),
    createdAt timestamp,
    active boolean
)
