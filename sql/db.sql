CREATE DATABASE thedb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE thedb;

CREATE TABLE tasks
(
  id SERIAL,
  name TEXT,
  is_completed TINYINT(1),
  created_at DATETIME,
  modified_at DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;
