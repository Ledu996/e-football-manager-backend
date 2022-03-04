const db = require('../../config/db');


const Description =  {};



Description.getAllDescriptions =  () => {
    return  new Promise((resolve, reject) => {
        db.query(`SELECT * FROM description `, (err, result) => {
            if (err) throw new Error({status : 500, message: 'Database error'});//reject({status : 500, message: 'Database error'})
            resolve(result);
        });
    })
    

}



module.exports = Description;