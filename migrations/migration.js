const db = require('../config/db');
const init = require('./init');



db.query(init, (err, results) => {
    console.log(err, results);
})