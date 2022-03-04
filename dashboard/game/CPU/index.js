const Lineup = require('../../lineup/lineup');



const CPU = {};

/*
const showGameTeam = (game) => {
    Lineup.setFormation(game.team_home, (homeLineup) => {
        /*Lineup.setFormation(game.team_away, (awayLineup) => {
                console.log(homeLineup);
        })
        console.log(homeLineup);
    })
}
*/

CPU.simulateGames = (games, callback) => {
    //console.log(games);
    callback(games);
    //showGameTeam(games);
    /*games.forEach(game => {
            showGameTeam(game);
    })*/
}





module.exports = CPU;


















