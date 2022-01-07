const authModule = require('./auth');




exports.getA = (req, res) => {
    authModule.getAllTeams((teams) => {
        console.log(teams);
        res.end(res.json(teams));
    })
}


exports.singup = (req, res) => {
    // validacija podataka
    // provera da li korisnik postoji
    // ako  ne postoji kreirati (hashirati lozinku) ga u bazi
    res.end('SingUp')
}













