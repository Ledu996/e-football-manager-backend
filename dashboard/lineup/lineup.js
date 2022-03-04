const res = require('express/lib/response');
const db = require('../../config/db');
const helpers = require('./helpers/helpers');
const lineup = {};


const preferedFormationWeight =  (arrayFormations, callback) => { //CPU
        let i;
        let weights = [];
        
        for (i = 0; i < arrayFormations.length; i++)
            weights[i] = arrayFormations[i].weight + (weights[i - 1] || 0);
        
            let random = Math.random() * weights[weights.length - 1];
        
        for (i = 0; i < weights.length; i++)
            if (weights[i] > random)
                break;
        
            callback(arrayFormations[i]);
}


lineup.setFormation =  (team_id, callback) => {
    
    db.query(`SELECT * FROM lineup WHERE team_id = ${team_id} `, (err, result) => {
       
        preferedFormationWeight(result, (prefferedFormatin) => {
            let query = `SELECT * FROM formation WHERE id = ${prefferedFormatin.formation_id} `;
            
            db.query(query, (err, formation) => {
                console.log(formation);
                    if (err) throw err.message;
                    let cpuStyleOfPlay = formation[0].type.split('/');
                    let rand = Math.floor(Math.random() * cpuStyleOfPlay.length);
                    
                    helpers.setAppropriateFormations(formation[0].schema.split('&&')[rand], (lineup) => {
                        callback(lineup);
                    })
            });
        })
   });
}

lineup.getLineup = () => {};

lineup.updateLineup = () => {};


module.exports = lineup;



