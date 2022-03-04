
const db = require('../../../config/db');
const Team = require('../../../model/team/index');
const VlasnikTima = require('../../../model/vlasnikTima/index');
const User = {};








User.simulateGame = (game, callback) => { // []
    
    Team.getById(game.team_home).then(team_home => {
        Team.getById(game.team_away).then(team_away => {
            
            
            callback({
                team_home,
                team_away
            })
        }).catch(err => callback({err: err.message}));
    })

            

    
    
    
                
         
    
}


module.exports = User;





