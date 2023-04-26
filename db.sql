CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE price(
    id SERIAL PRIMARY KEY,
    type_trip VARCHAR(255) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE train(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL
);

CREATE TABLE route(
    id SERIAL PRIMARY KEY,
    to_station VARCHAR(255) NOT NULL,
    from_station VARCHAR(255) NOT NULL,
    to_city VARCHAR(255) NOT NULL,
    from_city VARCHAR(255) NOT NULL,
    to_time TIME NOT NULL,
    from_time TIME NOT NULL,
    train_id INT NOT NULL,
    FOREIGN KEY (train_id) REFERENCES train(id)
);

CREATE TABLE store(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE store_route(
    id SERIAL PRIMARY KEY,
    route_id INT NOT NULL,
    store_id INT NOT NULL,
    FOREIGN KEY (route_id) REFERENCES route(id),
    FOREIGN KEY (store_id) REFERENCES store(id)
);

CREATE TABLE route_price(
    id SERIAL PRIMARY KEY,
    route_id INT NOT NULL,
    price_id INT NOT NULL,
    FOREIGN KEY (route_id) REFERENCES route(id),
    FOREIGN KEY (price_id) REFERENCES price(id)
);

