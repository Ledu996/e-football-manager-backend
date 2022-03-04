const lineup = require('./lineup');





exports.lineupGetter = (req, res) => {
    lineup.setFormation(req.params.id, (lineup, formation) => {
        res.json(lineup);
    })
}









