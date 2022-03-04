
const db = require('../../config/db');
const {Buffer} = require('buffer');
const res = require('express/lib/response');
const CPU = require('./CPU/index');
const User = require('./User/index');
// Proveriti da li korsnik postoji ako ne krenuti sa generisanjem rundi od pocetka


// utakmice runde koje sledi moraju biti spremne pre nego sto user klinke na dugme za kickOff


exports.generateRoundMarches = (team_id, callback) => { 
    db.query('SELECT * FROM round', (err, round) => {

        const roundToPlay = round.find(({isPlayed}) => Buffer.from(isPlayed).readInt8() == 0); // round Tracker
            
        db.query(`SELECT * FROM game WHERE round_id = ${roundToPlay.number}`, (err, games) => {
                
                let userGameIndex = games.findIndex((game) => game.team_home == team_id || game.team_away == team_id);
                let userGameContenders = games.splice(userGameIndex, 1); // start, delete count
                
                CPU.simulateGames(games, (cpuGameResults) => {
                    if(cpuGameResults.length > 0) {
                        User.simulateGame(userGameContenders[0], userResult => {
                            callback(userResult);
                        })
                    }
                })

                //callback(games);
                
                /*User.simulateGame(games.splice(0, userGameIndex), (finishedGame) => { // res.json() iskalkulisana utakmica
                    // CPU logika
            });*/
               
            })
    })
}

// Pokusati resiti User utakmicu

// Najvece pitanje kako i kada odigrati utakmice User i CPU

// console.log(game.team_home, game.team_away);























