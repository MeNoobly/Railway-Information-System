CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE time(
    id SERIAL PRIMARY KEY,
    to_time DATE NOT NULL,
    from_time DATE NOT NULL
);

CREATE TABLE train(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    speed VARCHAR(255) NOT NULL
);

CREATE TABLE route(
    id SERIAL PRIMARY KEY,
    to_station VARCHAR(255) NOT NULL,
    from_station VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    time_id INT NOT NULL,
    train_id INT NOT NULL,
    FOREIGN KEY (time_id) REFERENCES time(id),
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
