USE company;
CREATE TABLE employee
(
    id    INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(50)  NOT NULL,
    email VARCHAR(100) NOT NULL,
    dept  VARCHAR(50)  NOT NULL
);
