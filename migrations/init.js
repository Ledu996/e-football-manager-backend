const players = require('./addPlayers');



const init = `CREATE TABLE IF NOT EXISTS game (
        id int(7) NOT NULL,
        round_id int(7) DEFAULT NULL,
        game_starts datetime DEFAULT NULL,
        team_home int(7) DEFAULT NULL,
        team_away int(7) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table goal
  --
  
  CREATE TABLE IF NOT EXISTS goal  (
    id int(7) NOT NULL,
    game_id int(7) DEFAULT NULL,
    time_scored int(7) DEFAULT NULL,
    player_id int(7) DEFAULT NULL,
    scored_against int(7) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table korisnik
  --
  
  CREATE TABLE IF NOT EXISTS korisnik (
    korisnk_id int(7) NOT NULL,
    firstname varchar(25) DEFAULT NULL,
    lastname varchar(30) DEFAULT NULL,
    email varchar(50) DEFAULT NULL,
    password varchar(50) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table league
  --
  
  CREATE TABLE IF NOT EXISTS league (
    id int(7) NOT NULL,
    title varchar(20) NOT NULL,
    year varchar(15) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table player
  --
  
  CREATE TABLE IF NOT EXISTS player (
    player_id int(11) NOT NULL,
    player_firstname varchar(20) DEFAULT NULL,
    player_lastname varchar(25) DEFAULT NULL,
    player_position varchar(15) DEFAULT NULL,
    player_nacionality varchar(20) DEFAULT NULL,
    player_age tinyint(255) DEFAULT NULL,
    pl_team_id int(11) DEFAULT NULL,
    player_number int(11) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  --
  -- Dumping data for table player
  --
  
  INSERT IGNORE INTO player (firstname, lastname, position, nacionality, age, pl_team_id, number) VALUES
  ${players}
  -- --------------------------------------------------------
  
  --
  -- Table structure for table round
  --
  
  CREATE TABLE IF NOT EXISTS round (
    id int(7) NOT NULL,
    number int(7) DEFAULT NULL,
    date datetime DEFAULT NULL,
    league_id int(7) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table round_team
  --
  
  CREATE TABLE IF NOT EXISTS round_team (
    id int(7) NOT NULL,
    round_id int(7) DEFAULT NULL,
    team_id int(7) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table stats
  --
  
  CREATE TABLE IF NOT EXISTS stats (
    stats_id int(11) NOT NULL,
    losses int(11) DEFAULT NULL,
    goals_scored int(11) DEFAULT NULL,
    goals_conceded int(11) DEFAULT NULL,
    goal_difference int(11) DEFAULT NULL,
    stats_team_id int(11) DEFAULT NULL,
    points int(11) DEFAULT NULL,
    wins int(11) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  --
  -- Dumping data for table stats
  --
  
INSERT IGNORE INTO stats (stats_id, losses, goals_scored, goals_conceded, goal_difference, stats_team_id, points, wins) VALUES
(0, 0, 0, 0, 0, 0, 0, 0, 1),
(0, 0, 0, 0, 0, 0, 0, 0, 2),
(0, 0, 0, 0, 0, 0, 0, 0, 3),
(0, 0, 0, 0, 0, 0, 0, 0, 4),
(0, 0, 0, 0, 0, 0, 0, 0, 5),
(0, 0, 0, 0, 0, 0, 0, 0, 6),
(0, 0, 0, 0, 0, 0, 0, 0, 7),
(0, 0, 0, 0, 0, 0, 0, 0, 8),
(0, 0, 0, 0, 0, 0, 0, 0, 9),
(0, 0, 0, 0, 0, 0, 0, 0, 10),
(0, 0, 0, 0, 0, 0, 0, 0, 11),
(0, 0, 0, 0, 0, 0, 0, 0, 12),
(0, 0, 0, 0, 0, 0, 0, 0, 13),
(0, 0, 0, 0, 0, 0, 0, 0, 14),
(0, 0, 0, 0, 0, 0, 0, 0, 15),
(0, 0, 0, 0, 0, 0, 0, 0, 16),
(0, 0, 0, 0, 0, 0, 0, 0, 17),
(0, 0, 0, 0, 0, 0, 0, 0, 18),
(0, 0, 0, 0, 0, 0, 0, 0, 19),
(0, 0, 0, 0, 0, 0, 0, 0, 20);
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table team
  --
  
  CREATE TABLE IF NOT EXISTS team (
    team_id int(11) NOT NULL,
    team_name varchar(35) NOT NULL,
    team_location varchar(25) NOT NULL,
    team_logo varchar(255) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  --
  -- Dumping data for table team
  --
  
  INSERT IGNORE INTO team (team_id, team_name, team_location, team_logo) VALUES
  (1, 'Manchster United', 'Manchester/England', 'https://seeklogo.net/wp-content/uploads/2012/12/manchester-united-logo-vector-400x400.png'),
  (2, 'Liverpool FC', 'Liverpool/England', NULL),
  (3, 'Arsenal', 'London/England', NULL),
  (4, 'Aston Villa', 'Birmingham/England', NULL),
  (5, 'Brentford', 'Brentford/England', NULL),
  (6, 'Brithon & Hove Albion', 'Brithon/England', NULL),
  (7, 'Burnley', 'Burnley/England', NULL),
  (8, 'Chelsea', 'London/England', NULL),
  (9, 'Crystal Palace', 'London/England', NULL),
  (10, 'Everton', 'Liverpool/England', NULL),
  (11, 'Leeds United', 'Leeds/England', NULL),
  (12, 'Leicester City', 'Leicester/England', NULL),
  (13, 'Manchester City', 'Manchester/England', NULL),
  (14, 'Newcastle United', 'Newcastle/England', NULL),
  (15, 'Norwich City', 'Norwich/England', NULL),
  (16, 'Southampton', 'Southampton/England', NULL),
  (17, 'Tottenham Hotspur', 'London/England', NULL),
  (18, 'Watford', 'London/England', NULL),
  (19, 'West Ham United', 'London/England', NULL),
  (20, 'Wolverhampton Wanderers', 'Wolverhampton/England', NULL);
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table team_league
  --
  
  CREATE TABLE IF NOT EXISTS team_league (
    id int(7) NOT NULL,
    league_id int(7) DEFAULT NULL,
    team_id int(7) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  -- --------------------------------------------------------
  
  --
  -- Table structure for table vlasnik_tima
  --
  
  CREATE TABLE IF NOT EXISTS vlasnik_tima (
    vlasnik_id int(7) NOT NULL,
    team_id int(7) DEFAULT NULL,
    korisnik_id int(7) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  --
  -- Indexes for dumped tables
  --
  
  --
  -- Indexes for table game
  --
   ALTER IGNORE TABLE  game
    ADD PRIMARY KEY (id),
    ADD KEY round_id (round_id),
    ADD KEY team_home (team_home),
    ADD KEY team_away (team_away);
  
  --
  -- Indexes for table goal
  --
   ALTER IGNORE TABLE  goal
    ADD PRIMARY KEY (id),
    ADD KEY game_id (game_id),
    ADD KEY player_id (player_id),
    ADD KEY scored_against (scored_against);
  
  --
  -- Indexes for table korisnik
  --
   ALTER IGNORE TABLE  korisnik
    ADD PRIMARY KEY (korisnk_id);
  
  --
  -- Indexes for table league
  --
   ALTER IGNORE TABLE  league
    ADD PRIMARY KEY (id);
  
  --
  -- Indexes for table player
  --
   ALTER IGNORE TABLE  player
    ADD PRIMARY KEY (player_id),
    ADD KEY pl_team_id (pl_team_id);
  
  --
  -- Indexes for table round
  --
   ALTER IGNORE TABLE  round
    ADD PRIMARY KEY (id),
    ADD KEY league_id (league_id);
  
  --
  -- Indexes for table round_team
  --
   ALTER IGNORE TABLE  round_team
    ADD PRIMARY KEY (id),
    ADD KEY round_id (round_id),
    ADD KEY team_id (team_id);
  
  --
  -- Indexes for table stats
  --
   ALTER IGNORE TABLE  stats
    ADD PRIMARY KEY (stats_id),
    ADD KEY stats_team_id (stats_team_id);
  
  --
  -- Indexes for table team
  --
   ALTER IGNORE TABLE  team
    ADD PRIMARY KEY (team_id);
  
  --
  -- Indexes for table team_league
  --
   ALTER IGNORE TABLE  team_league
    ADD PRIMARY KEY (id),
    ADD KEY league_id (league_id),
    ADD KEY team_id (team_id);
  
  --
  -- Indexes for table vlasnik_tima
  --
   ALTER IGNORE TABLE  vlasnik_tima
    ADD PRIMARY KEY (vlasnik_id),
    ADD KEY FK_vlasnikTema (team_id),
    ADD KEY korisnik_id (korisnik_id);
  
  --
  -- AUTO_INCREMENT for dumped tables
  --
  
  --
  -- AUTO_INCREMENT for table game
  --
   ALTER IGNORE TABLE  game
    MODIFY id int(7) NOT NULL AUTO_INCREMENT;
  
  --
  -- AUTO_INCREMENT for table goal
  --
   ALTER IGNORE TABLE  goal
    MODIFY id int(7) NOT NULL AUTO_INCREMENT;
  
  --
  -- AUTO_INCREMENT for table korisnik
  --
   ALTER IGNORE TABLE  korisnik
    MODIFY korisnk_id int(7) NOT NULL AUTO_INCREMENT;
  
  --
  -- AUTO_INCREMENT for table league
  --
   ALTER IGNORE TABLE  league
    MODIFY id int(7) NOT NULL AUTO_INCREMENT;
  
  --
  -- AUTO_INCREMENT for table player
  --
   ALTER IGNORE TABLE  player
    MODIFY player_id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
  
  --
  -- AUTO_INCREMENT for table round
  --
   ALTER IGNORE TABLE  round
    MODIFY id int(7) NOT NULL AUTO_INCREMENT;
  
  --
  -- AUTO_INCREMENT for table round_team
  --
   ALTER IGNORE TABLE  round_team
    MODIFY id int(7) NOT NULL AUTO_INCREMENT;
  
  --
  -- AUTO_INCREMENT for table stats
  --
   ALTER IGNORE TABLE  stats
    MODIFY stats_id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
  
  --
  -- AUTO_INCREMENT for table team
  --
   ALTER IGNORE TABLE  team
    MODIFY team_id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
  
  --
  -- AUTO_INCREMENT for table team_league
  --
   ALTER IGNORE TABLE  team_league
    MODIFY id int(7) NOT NULL AUTO_INCREMENT;
  
  --
  -- AUTO_INCREMENT for table vlasnik_tima
  --
   ALTER IGNORE TABLE  vlasnik_tima
    MODIFY vlasnik_id int(7) NOT NULL AUTO_INCREMENT;
  
  --
  -- Constraints for dumped tables
  --
  
  --
  -- Constraints for table game
  --
   ALTER IGNORE TABLE  game
    ADD CONSTRAINT game_ibfk_1 FOREIGN KEY (round_id) REFERENCES round (id),
    ADD CONSTRAINT game_ibfk_2 FOREIGN KEY (team_home) REFERENCES team (team_id),
    ADD CONSTRAINT game_ibfk_3 FOREIGN KEY (team_away) REFERENCES team (team_id);
  
  --
  -- Constraints for table goal
  --
   ALTER IGNORE TABLE  goal
    ADD CONSTRAINT goal_ibfk_1 FOREIGN KEY (game_id) REFERENCES game (id),
    ADD CONSTRAINT goal_ibfk_2 FOREIGN KEY (player_id) REFERENCES player (player_id),
    ADD CONSTRAINT goal_ibfk_3 FOREIGN KEY (scored_against) REFERENCES team (team_id);
  
  --
  -- Constraints for table player
  --
   ALTER IGNORE TABLE  player
    ADD CONSTRAINT player_ibfk_1 FOREIGN KEY (pl_team_id) REFERENCES team (team_id);
  
  --
  -- Constraints for table round
  --
   ALTER IGNORE TABLE  round
    ADD CONSTRAINT round_ibfk_1 FOREIGN KEY (league_id) REFERENCES league (id);
  
  --
  -- Constraints for table round_team
  --
   ALTER IGNORE TABLE  round_team
    ADD CONSTRAINT round_team_ibfk_1 FOREIGN KEY (round_id) REFERENCES round (id),
    ADD CONSTRAINT round_team_ibfk_2 FOREIGN KEY (team_id) REFERENCES team (team_id);
  
  --
  -- Constraints for table stats
  --
   ALTER IGNORE TABLE  stats
    ADD CONSTRAINT stats_ibfk_1 FOREIGN KEY (stats_team_id) REFERENCES team (team_id);
  
  --
  -- Constraints for table team_league
  --
   ALTER IGNORE TABLE  team_league
    ADD CONSTRAINT team_league_ibfk_1 FOREIGN KEY (league_id) REFERENCES league (id),
    ADD CONSTRAINT team_league_ibfk_2 FOREIGN KEY (team_id) REFERENCES team (team_id);
  
  --
  -- Constraints for table vlasnik_tima
  --
   ALTER IGNORE TABLE  vlasnik_tima
    ADD CONSTRAINT FK_vlasnikTema FOREIGN KEY (team_id) REFERENCES team (team_id),
    ADD CONSTRAINT vlasnik_tima_ibfk_1 FOREIGN KEY (korisnik_id) REFERENCES korisnik (korisnk_id) ON DELETE CASCADE ON UPDATE CASCADE;
  COMMIT;
  `;




module.exports = init;






