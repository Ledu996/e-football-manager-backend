const game = require('./index');
const VlasnikTima = require('../../model/vlasnikTima/index')


exports.generateRoundMatches = (req, res) => {
    // req.body team_id
    // generisati id putem tokena
    VlasnikTima.getByKorisnikId(81, VlasnikTimaInfo => {
        
        const team_id = VlasnikTimaInfo[0].team_id;

        game.generateRoundMarches(team_id, (games) => {
            res.json(games);
        });
    })
    
}