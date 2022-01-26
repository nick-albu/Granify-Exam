CREATE TABLE 'Cats' (
    `id` int NOT NULL,
    `name` varchar(255),
    `age` int NOT NULL, 
    `favouriteFood` varchar(255),
    `meowCounter` int,
    PRIMARY KEY (id)
)

/*I considered leaving `age` with the possibility of NULL since it could 
be a stray cat and we don't know it's age, however a previous question denotes it is always 
between 5-10, so we know it won't be NULL.*/

CREATE TABLE 'Dogs' (
    `id` int NOT NULL,
    `name` varchar(255),
    `age` int NOT NULL,
    `favouriteFood` varchar(255),
    `barkCounter` int,
    PRIMARY KEY (id)
)

/* There are separate cat and dog name tables incase of a scenario where a dog and cat
have the same id */

CREATE TABLE 'Cat Names' (
    `id` int NOT NULL,
    `petId` int NOT NULL,
    `name` varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (petId),
)

CREATE TABLE 'Dog Names' (
    `id` int NOT NULL,
    `petId` int NOT NULL,
    `name` varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (petId)
)

/*For now these values are just hardcoded in which I believe satsifies the scope of the question*/
INSERT INTO Cats
VALUES (1, Garfield, 6, Lasagna, 0)

INSERT INTO Dogs
VALUES (1, Oddie, 9, Bacon, 0)
