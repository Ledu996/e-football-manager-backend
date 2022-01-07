const lineup = require('./lineup');





exports.lineupGetter = (req, res) => {
    lineup.setLineup(req.params.id, (lineup) => {
        res.json(lineup);
    })
}









