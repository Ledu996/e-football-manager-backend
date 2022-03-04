const db = require('../../config/db');

const Korisnik = {};


Korisnik.getByEmailAndPassword = (email, password,  callback) => { // LogIn i PASSWOD I EMAIL TRUE
    console.log('Korisnik module ', email);
    const query = `SELECT * FROM korisnik WHERE email = '${email}' AND password = '${password}'`;
        
    return db.query(query, (err, result) => {
            if(err) throw new Error({status: 500 , message: 'Database Error'});
            callback(result);
        })
};

// getByEmail 

Korisnik.getByEmail = (email, callback) => {
    const query = `SELECT * FROM korisnik WHERE email = '${email}'`;
    return db.query(query, (err, result) => {
        console.log('Result in korinsik module ', result);
        if(err) throw new Error({status: 500 , message: 'Error with database'});
        callback(result);
    })
}

Korisnik.create = (firstname, lastname, email, password, callback) => { // GET BY Email
    //console.log('Korisnik module (firstname, lastname, email, password) ', firstname, lastname, email, password);
    
    const query = 'INSERT INTO korisnik(firstname, lastname, email, password) VALUES(?)' ;
    let values = [[firstname, lastname, email, password]];
    return db.query(query, values, (err, result) => {
        if(err) throw err;
        callback(result);
             
            // INSERT into  Vlasnik tima (id) Values (insertId) 

    })

}






module.exports = Korisnik;




















