const db = require('../../config/db');
const helpers = require('./helpers/helpers');


const Scedule = {};


/*
team as t ON g.team_home = t.team_id `; INNER JOIN 
team as t ON g.team_home = t.team_id `;
*/

// izr broj rundi u sing up endpoint


Scedule.setSceduleGames = async (generatedArray, callback) => { // runda uteakmice, runda utakmice
    const gameQuery = 'INSERT INTO game(round_id, game_starts, team_home, team_away) VALUES(?)';
    const roundQuery = 'INSERT INTO round(id, number, date, league_id) VALUES(?)';
    let numberOfRounds = generatedArray.length; 

        for (let i = 0; i < numberOfRounds; i++) {
                const roundValues = [[i + 1, i + 1, `${helpers.setDateRounds((date) => {console.log('Povratni datum: ', date); return date})}`, 1]];
                const roundResult = await db.query(roundQuery, roundValues);
        
            for(let j = 0; j < generatedArray[i].length - 1; j += 2) {

                let gameValues = [[i + 1, '16:00:00', generatedArray[i][j]['team_id'], generatedArray[i][j + 1]['team_id']]];
                    
                 await db.query(gameQuery, gameValues, (err, result) => {
                        if(err) throw {'status': 500, 'message': 'Database Error'}
                    })
            }
        }

        callback({'status': 200, 'message': 'Schedule being set'});
}

Scedule.getScedule = (callback) => {
    const rounds = [];
    
    db.query('SELECT * FROM team', (error1, team) => {
        if(!error1) {
            db.query('SELECT * FROM round', (err, round) => { // async srediti kveri
                if(!err) {
                    for(let i = 0; i < round.length; i++) {
                        const games = [];
                        
                        db.query(`SELECT * FROM game WHERE game.round_id =  ${round[i].id}`, (error, game) => {
                            console.log(game.length);
                            if(!error) {
                                for(let j = 0; j < game.length; j++) {
                                    let host, guest;
                                    for(let k = 0; k < team.length; k++) {
                                        if(team[k].team_id === game[j].team_home) {
                                            host = {team_name: team[k].team_name, team_logo: team[k].team_logo};
                                        }
                                        if(team[k].team_id === game[j].team_away) {
                                            guest = {team_name: team[k].team_name, team_logo: team[k].team_logo};
                                        }
                                    }
                                    games.push({
                                        id: game[j].id,
                                        date: game[j].game_starts,
                                        host,
                                        guest
                                    })
                                }
                            }
                        })

                        setTimeout(() => {
                            rounds.push({
                                id: round[i].id,
                                number: `Matchweek ${round[i].number}`,
                                date: round[i].date,
                                games
                            })
                            console.log(games['date'])
                        }, 1000);

                    }
                    setTimeout(() =>{
                        callback(rounds);
                    }, 1000)
                    
                }
            })
        }
        
    })
    
}


module.exports = Scedule;





















