const db = require('../../config/db');
const Stadium = {};


Stadium.getAllStadiums = () => {
    return  new Promise((resolve, reject) => {
        db.query(`SELECT * FROM team_stadium`, (err, result) => {
            if(err) throw new Error({status: 500, message: err.message});
            resolve(result);
        });
    })
}



module.exports = Stadium;