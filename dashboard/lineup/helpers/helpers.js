const helpers = {};
const db = require('../../../config/db')

helpers.getMaxPlayer = (groupOfPlayers) => {
    //let max = groupOfPlayers.reduce((a, b) => {return Math.max(a['rating'], b['rating'])});
    //console.log(groupOfPlayers);
    
    let max = groupOfPlayers[0];

    for(let i = 1; i < groupOfPlayers.length; i++) {
        if(groupOfPlayers[i]['rating'] > max['rating']) {
            max = groupOfPlayers[i];
        }
    }
     return max;
}


helpers.getPosition = (position, players) => { // position, players
    let filterArray = players.filter((el) => el['position'].includes(position)); // === position
    console.log(filterArray);
    return helpers.getMaxPlayer(filterArray);
}



helpers.setAppropriateFormations =  (lineupSchema, callback) => { // palyersArr
    
    let lineup = {
        'firstTeam': [],
        'substatutes':[], 
        'outOfOrder': [],
    };

    
    let lineupArr = lineupSchema.split('/');
    console.log(lineupArr);
    db.query('SELECT * FROM player WHERE pl_team_id = 1', (err, playersArr) => {

        for(let i = 0; i < lineupArr.length; i++) {
            let position =  lineupArr[i]; 
            
            let availablePlayers = playersArr.filter((pl) => {
                const allreadyAdded = lineup['firstTeam'].find((firstTeamPl) => {
                    return firstTeamPl.player_id === pl.player_id;
                })
                return !allreadyAdded;
            })  
                  
            let player = helpers.getPosition(position, availablePlayers);

            if(player) {
            lineup['firstTeam'].push(player); 
            }
            
        }
        console.log(lineup);
        callback(lineup);
    });

        

    
         // napraviti pod niz od zadatog parametra. Poredti ratings i najboljeg pushovati u niz
    

    
     
    
}




module.exports = helpers;








    