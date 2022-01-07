const db = require('../../config/db');
const helpers = require('./helpers/helpers');
const lineup = {};

const defaultFormations = {
    '4-3-3' : ['GK', 'LB', 'CB', 'CB', 'RB', 'CDM', 'CM', 'CM', 'RW', 'LW', 'ST'],
    '3-5-2' : ['GK', 'CB', 'CB', 'CB', 'LB', 'RB', 'CDM', 'CM', 'CM', 'ST', 'ST'], 
    '4-2-2-2' : ['GK', 'LB', 'CB', 'CB', 'RB', 'CDM', 'CDM', 'CAM', 'CAM', 'ST', 'ST'], 
    '4-2-3-1': ['GK', 'LB', 'CB', 'CB', 'RB', 'CDM', 'CDM', 'LM', 'CAM', 'RM', 'ST'], 
    '3-4-2-1': ['GK', 'CB', 'CB', 'CB', 'LM', 'CM', 'CM', 'RM', 'LF', 'RF', 'ST'],
    '4-4-1-1' : ['GK', 'LB', 'CB', 'CB', 'RB', 'LM', 'CM', 'CM', 'RM', 'CF', 'ST'],
    '4-1-4-1': ['GK', 'LB', 'CB', 'CB', 'RB', 'CDM', 'LM', 'CM', 'CM', 'RM', 'ST']
}

// napraviti prvo defoltno pa posle videti izmene

lineup.setLineup = (team_id, callback) => {
    db.query(`SELECT * FROM lineup WHERE team_id = ${team_id}`, (err, lineup) => { // {id: 5, formation_id: 5, team_id: 2};
        if(!err && lineup) {
            db.query(`SELECT * FROM formation WHERE id = ${lineup[0]['formation_id']}`, (err1, formation) => {
                if(!err1 && formation) {
                    db.query(`SELECT * FROM player WHERE pl_team_id = ${team_id}`, (err2, players) => {
                        if(!err2 && players) {
                            const pickedFormation = defaultFormations[`${formation[0]['type']}`];
                            helpers.setAppropriateFormations(pickedFormation, players, (teams_lineup) => {
                                callback(teams_lineup);
                            })
                        }else{
                            console.log(err2);
                        }
                    })
                }
            })
            //callback(lineup);
        }
        
    })
    /*db.query(`SELECT * FROM player WHERE pl_team_id = ${team_id}`, (err, result) => {
        if(!err && result) {
            callback(result);
        }
    })*/
}


lineup.getLineup = () => {};

lineup.updateLineup = () => {};


module.exports = lineup;



