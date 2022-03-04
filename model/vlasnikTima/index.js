
const db = require('../../config/db');



const VlasnikTima = {};


VlasnikTima.create = (user_id, team_id, callback) => {
    console.log('U vlasniku tima ', user_id, team_id);

    const query = `INSERT INTO vlasnik_tima (vlasnik_id, team_id, korisnik_id) VALUES (NULL, ${team_id}, ${user_id});`
    
    return db.query(query, (err, results) => {
        if (err) throw err;
            callback(results);
    })
}

VlasnikTima.getByKorisnikId = (user_id, callback) => {
    console.log('User_id u vlasniku ', user_id);
    
    const query = `SELECT * FROM vlasnik_tima WHERE korisnik_id = ${user_id}`;
    
    return db.query(query, (err, result) => {
        if (err) throw err.message;
        console.log(Array.isArray(result), result);
        callback(result);
    })
}



module.exports = VlasnikTima;










