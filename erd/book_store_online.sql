create database bookstore;
use bookstore;
CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(255) NOT NULL
);
CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

CREATE TABLE account_role (
    account_id INT,
    role_id INT,
    FOREIGN KEY (account_id)
        REFERENCES accounts (id),
    FOREIGN KEY (role_id)
        REFERENCES roles (id)
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    gender BIT(1),
    birthday DATE,
    phone VARCHAR(10),
    address VARCHAR(255),
    account_id INT,
    FOREIGN KEY (account_id)
        REFERENCES accounts (id)
);
CREATE TABLE authors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE publishers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(10) NOT NULL
);
CREATE TABLE descriptions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    introduce LONGTEXT NOT NULL,
    content LONGTEXT NOT NULL
);
CREATE TABLE vouchers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `percent` DOUBLE NOT NULL
);

CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    is_delete BIT(1) DEFAULT 0,
    publication_date DATETIME NOT NULL,
    quantity INT NOT NULL,
    description_id INT,
    FOREIGN KEY (description_id)
        REFERENCES descriptions (id),
    author_id INT,
    FOREIGN KEY (author_id)
        REFERENCES authors (id),
    publisher_id INT,
    FOREIGN KEY (author_id)
        REFERENCES publishers (id)
);
CREATE TABLE voucher_book (
    id INT PRIMARY KEY AUTO_INCREMENT,
    voucher_id INT,
    FOREIGN KEY (voucher_id)
        REFERENCES vouchers (id),
    book_id INT,
    FOREIGN KEY (book_id)
        REFERENCES books (id)
);
CREATE TABLE images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    url LONGTEXT NOT NULL,
    book_id INT,
    FOREIGN KEY (book_id)
        REFERENCES books (id)
);
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    quantity INT NOT NULL,
    order_date DATETIME NOT NULL,
    total_pay DOUBLE NOT NULL,
    book_id INT,
    FOREIGN KEY (book_id)
        REFERENCES books (id),
    account_id INT,
    FOREIGN KEY (account_id)
        REFERENCES accounts (id)
);
CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content LONGTEXT NOT NULL,
    book_id INT,
    FOREIGN KEY (book_id)
        REFERENCES books (id),
    account_id INT,
    FOREIGN KEY (account_id)
        REFERENCES accounts (id)
);


