
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item" (description, image_url, user_id)
VALUES ('A cruel and unusual toy', 'https://images-na.ssl-images-amazon.com/images/I/51QPeEB0YNL._AC_SY606_.jpg', 1),
('A mysterious and ominous liquid', 'https://cdn.shopify.com/s/files/1/0074/9495/9194/products/Groovy-Motion-18-quot--Black-with-Blue-Wax-Lava-Lamp--1.jpg',1),
('Our one true overlord', 'https://www.orioritech.com/wp-content/uploads/2018/06/Simple-programming-robot.jpg',1),
('A somewhat unhelpful plant','https://www.thespruce.com/thmb/oIxigOItIWy9xV9mlQDZOIOAvRo=/2048x1545/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-76c211bb8d1b461e8af30a68b6169535.jpg',1),
('Priceless relic from a forgotten time','https://i.pinimg.com/originals/fd/90/3b/fd903bb3c39b382a44e4a03e3a5bb4cb.jpg',1);