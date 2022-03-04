const db = require('../../config/db');


const Budget =  {};



Budget.getAllBudgets =  () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM budget `, (err, result) => {
            if(err) throw new Error({status: 500, message: err.message});
            resolve(result);
        });
    })
}



module.exports = Budget;