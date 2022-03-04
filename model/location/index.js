const db = require('../../config/db');


const Location =  {};



Location.getAllLocations =  () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM location `, (err, result) => {
            if(err) throw new Error({status : 500, message : err.message});
            resolve(result);
        });
    })
}




module.exports = Location;