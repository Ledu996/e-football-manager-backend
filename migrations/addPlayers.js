// Prva tri su vec u init fajlu

// firstname, lastname, position, nacionality, age('Date type') , team_id, player_number



const manUPlayers = require('./teams/manchester_united/players');
const livPlayers = require('./teams/liverpool/players');

const players = `INSERT IGNORE INTO player (firstname, lastname, position, nacionality, age, pl_team_id, number, rating) VALUES
${manUPlayers},
${livPlayers},

`;


module.exports = players;