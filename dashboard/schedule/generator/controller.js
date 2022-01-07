const generate = require('./generator');
const schedule = require('../schedule');




exports.generateRounds = (req, res) => {
    generate((generatedArray) => {
        schedule.setSceduleGames(generatedArray, (message) => {
            res.json(message);
        })
    })
}