


// podsedtk staviti min capacity max capacity



const addTeamStadiums = () => {
    return `
    INSERT INTO team_stadium (name, location, capacity, team_id)
    VALUES ('Old Trafford', Manchester/England, 76000, 1),
           ('Anfield Road', 'Liverpool/England', 53394, 2),
           ('The Emirates', 'London/England', 60704, 3),
           ('Villa Road', 'Birmingham/England, 42095', 4),
           ('Community Stadium', 'London/England', 17250, 5),
           ('Falmer Stadium', 'Brithon/England', 31800, 6),
           ('Torf Moor', 'Burnley/England', 21944, 7),
           ('Stamford Bridge', 'London/England', 41837, 8),
           ('Selhurst Park', 'London/England', 25486, 9),
           ('Goodison Park', 'Liverpool/England', 39414, 10),
           ('Elland Road', 'Leeds/England', 37792, 11),
           ('King Power Stadium', 'Leicester/England', 32261, 12),
           ('The Etihad', 'Manchester/England', 55097, 13),
           ('Saint James Park', 'Newcastle/England', 52305, 14),
           ('Carrow Road', 'Norwich/England', 27359, 15),
           ('Saint Maries', 'Southhampton/England', 32505, 16),
           ('Tottenham Hotspur Stadium', 'London/England', 62850, 17),
           ('Vicarage Road', 'London/England', 22200, 18),
           ('London Stadium', 'London/England', 60000, 19),
           ('Molineux', 'Liverpool/England', 32050, 20),
    `
}