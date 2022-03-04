//const lineup = require('../../../dashboard/lineup/helpers/helpers');
const lineup = require('../../../dashboard/lineup/lineup');
const db = require('../../../config/db');
const Calculate = {};


Calculate.teamRatings = (teams) => { // {timovi}
    const teamArray = [];
    const teamObj = {}
    
    for(let i = 0; i < teams.length; i++) {
       lineup.setLineup(teams[i].team_id, (team_lineup, formation) => { // 4-2-2-2
            const splitFormationArr = formation.split('-');
            let index = 0;
                if(splitFormationArr.length > 3) {

                }else {
                    for(let j = 0; j < splitFormationArr[index]; j++) {
                        
                    }
                }
            
       })
    }
}



module.exports = Calculate;












