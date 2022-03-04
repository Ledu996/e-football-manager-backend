const db = require('../../config/db');



const Team = {};



Team.getAllTeams =  () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM team`, (err, result) => {
            if(err) throw new Error({status: 500, message: err.message});
            resolve(result);
        })
        
    })
}


Team.getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM team WHERE team_id = ${id}`, (err, result) => {
            if(err) throw new Error({status: 500, message: err.message})
            resolve(result);
        })
    })
}








module.exports = Team;









