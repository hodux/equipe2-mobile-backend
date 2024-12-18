DROP DATABASE IF EXISTS `exam`;
CREATE DATABASE IF NOT EXISTS `exam`;
USE `exam`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
);
CREATE TABLE IF NOT EXISTS Movies (
    id INT PRIMARY KEY,
    url VARCHAR(50),
    title VARCHAR(40),
    primaryImage VARCHAR(200),
    description TEXT,
    startYear INT,
    endYear INT,
    runtimeMinutes INT,
    contentRating VARCHAR(10),
    averageRating DECIMAL(3, 1),
    numVotes INT,
    type VARCHAR(20)
);

INSERT INTO Movies (id, url, title, primaryImage, description, startYear, endYear, runtimeMinutes, contentRating, averageRating, numVotes, type) VALUES
 (1, "https://www.imdb.com/title/tt1262426/", "Wicked", "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_.jpg", "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.", 2024, NULL, 160, "PG", 8.1, 41644, "movie"),
 (2, "https://www.imdb.com/title/tt9218128/", "Gladiator II", "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_.jpg", "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.", 2024, NULL, 148, "R", 6.9, 87129, "movie"),
 (3, "https://www.imdb.com/title/tt13622970/", "Moana 2", "https://m.media-amazon.com/images/M/MV5BZDUxNThhYTUtYjgxNy00MGQ4LTgzOTEtZjg1YTU5NTcwNThlXkEyXkFqcGc@._V1_.jpg", "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.", 2024, NULL, 100, "PG", 7.1, 18875, "movie"),
 (4, "https://www.imdb.com/title/tt0172495/", "Gladiator", "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg", "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", 2000, NULL, 155, "R", 8.5, 1693662, "movie"),
 (5, "https://www.imdb.com/title/tt17526714/", "The Substance", "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_.jpg", "A fading celebrity takes a black-market drug: a cell-replicating substance that temporarily creates a younger, better version of herself.", 2024, NULL, 141, "R", 7.4, 152343, "movie"),
 (6, "https://www.imdb.com/title/tt2396431/", "Dear Santa", "https://m.media-amazon.com/images/M/MV5BMDNjMzcxNTEtODRjYi00MGQ4LWE3YjAtNjllYzE1OThmZmRhXkEyXkFqcGc@._V1_.jpg", "When a young boy mails his Christmas wish list to Santa with one crucial spelling error, a devilish Jack Black arrives to wreak havoc on the holidays.", 2024, NULL, 107, "PG-13", 5.4, 4125, "movie"),
 (7, "https://www.imdb.com/title/tt14948432/", "Red One", "https://m.media-amazon.com/images/M/MV5BZmFkMjE4NjQtZTVmZS00MDZjLWE2ZmEtZTkzODljNjhlNWUxXkEyXkFqcGc@._V1_.jpg", "After Santa Claus is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.", 2024, NULL, 123, "PG-13", 6.9, 37040, "movie"),
 (8, "https://www.imdb.com/title/tt6263850/", "Deadpool & Wolverine", "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg", "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.", 2024, NULL, 128, "R", 7.7, 403816, "movie"),
 (9, "https://www.imdb.com/title/tt26743210/", "How to Train Your Dragon", "https://m.media-amazon.com/images/M/MV5BOGU0ZWYzZmUtZDM5Yi00NjJlLTllNTctY2NiZWVkOTIzM2JlXkEyXkFqcGc@._V1_.jpg", "Follows a young Viking as he aspires to hunt dragons, and how he unexpectedly becomes a friend of a young dragon.", 2025, NULL, NULL, NULL, NULL, NULL, "movie"),
 (10, "https://www.imdb.com/title/tt20215234/", "Conclave", "https://m.media-amazon.com/images/M/MV5BYjgxMDI5NmMtNTU3OS00ZDQxLTgxZmEtNzY1ZTBmMDY4NDRkXkEyXkFqcGc@._V1_.jpg", "When Cardinal Lawrence is tasked with leading one of the world's most secretive and ancient events, selecting a new Pope, he finds himself at the center of a conspiracy that could shake the very foundation of the Catholic Church.", 2024, NULL, 120, "PG", 7.5, 21374, "movie");

