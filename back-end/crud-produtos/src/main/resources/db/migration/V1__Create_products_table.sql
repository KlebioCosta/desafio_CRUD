CREATE TABLE products (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          code VARCHAR(50) NOT NULL UNIQUE,
                          description TEXT,
                          price DECIMAL(10, 2) NOT NULL
);
