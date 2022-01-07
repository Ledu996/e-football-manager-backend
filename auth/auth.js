const db = require('../config/db');

const Auth = {};

Auth.getAllTeams = (callback) => {
    return db.query('SELECT * FROM team', (err, resault) => {
        if(err) throw {message: 'Greska', status: 'databaseError'}
            callback(resault, err);
        
    })
}


Auth.registration = (firstname, lastname, email, password) => {
    const query = 'INSERT INTO korisnik(firstname, lastname, email, password) VALUES(?)' ;
    let values = [[firstname, lastname, email, password]];
    return db.query(query, values, (err, resault) => {
        
    })

}


module.exports = Auth;


