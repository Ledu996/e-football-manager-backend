const helpers = {};


helpers.getMaxPlayer = (groupOfPlayers) => {
    //let max = groupOfPlayers.reduce((a, b) => {return Math.max(a['rating'], b['rating'])});
    let max = groupOfPlayers[0];

    for(let i = 1; i < groupOfPlayers.length; i++) {
        if(groupOfPlayers[i]['rating'] > max['rating']) {
            max = groupOfPlayers[i];
        }
    }
    console.log('Max', max);
    return max;
}


helpers.getPosition = (position, players) => {
    let filterArray = players.filter((el) => el['position'] === position);
    return helpers.getMaxPlayer(filterArray);

}

helpers.setAppropriateFormations = (lineupArr, playersArr, callback) => { // treba menjati original niz 
    console.log(lineupArr);
    let lineup = {
        'firstTeam': [],
        'substatutes':[], 
        'outOfOrder': [],
    };
     // menjati playersArr kroz svaku iteraciju

    for(let i = 0; i < lineupArr.length; i++) {
        let position =  lineupArr[i]; 
        
        let availablePlayers = playersArr.filter((pl) => {
            const allreadyAdded = lineup['firstTeam'].find((firstTeamPl) => {
                return firstTeamPl.player_id === pl.player_id;
            })
            return !allreadyAdded;
        })  
              
        let player = helpers.getPosition(position, availablePlayers);
        console.log(availablePlayers, player, position);
        if(player) {
        lineup['firstTeam'].push(player); 
        }

    }
    callback(lineup); // napraviti pod niz od zadatog parametra. Poredti ratings i najboljeg pushovati u niz
}




module.exports = helpers;