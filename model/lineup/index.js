const { reject } = require('bcrypt/promises');
const { type } = require('express/lib/response');
const db= require('../../config/db');
const VlasnikTima = require('../vlasnikTima');

const Lineup = {};

/*
Lineup.getLineupByTeamId = (team_id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM lineup WHERE team_id = ${team_id}`, (err, result) => {
            if (err) {
                reject(err.message);
            }
            resolve(result);
        })
    })
}*/



Lineup.insertUserLineup = (korisnik_id, callback) => {
    console.log(korisnik_id, typeof korisnik_id);

    VlasnikTima.getByKorisnikId(105, (vlasnik) => { //[]
        
        db.query(`SELECT * FROM player WHERE pl_team_id = ${vlasnik[0].team_id}`, (err, players) => {
            players.map(player => { // Resiti problem sa auto Increment
                console.log(player); // id u lineup ne sme biti primaran kluc
                db.query(`INSERT into lineup(id, player_id) VALUES (1, ${player.player_id})`, (err, result) => {
                       console.log(result);
                })
            })
            callback({message: 'Lineup inserted'});
       })
    })
    
}
 

module.exports = Lineup;














