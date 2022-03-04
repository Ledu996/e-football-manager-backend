// Modules
const Korisnik = require('../model/korisnik/index');
const Team = require('../model/team/index');
const Budget = require('../model/budget/index');
const Stadium = require('../model/stadium/index');
const Description = require('../model/description/index');
const Location = require('../model/location/index');
const VlasnikTima = require('../model/vlasnikTima/index');
const Lineup = require('../model/lineup');

// Helpers
const {firstnameValidation, lastnameValidation} = require('./validations/name/index');
const {emailValidaton} = require('./validations/email/index');
const {passwordValidaton} = require('./validations/password/index');
const {handleTeamStructure} = require('../model/helpers/index');
// Auth
const {hash, compare} = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv/config');


exports.singIn = (req, res) => {

    const email = req.params.email.trim();
    const password = req.params.password.trim();

    const isValid = emailValidaton(email) && passwordValidaton(password);

    if(isValid) {

    Korisnik.getByEmail(email, (korisnik) => {
            
     if(korisnik.length === 1) {
         Promise.resolve(compare(password, korisnik[0].password))
            .then(valid => valid === true ? res.json(korisnik[0]) : res.json({status: 402, message: 'User with this data does not exist'}));
    }else {
            res.json({status: 400, message: 'User with this data does not exist'});
        }
    })
       
    }else {
        res.json({status: 401, message: 'Wrong input data'});
    }
        
}


exports.singUp =  (req, res) => { // Kreacija tokena mora da postoji
    
    const {firstname, lastname, email, password} = req.body;
    
    const isValid = firstnameValidation(firstname.trim()) && lastnameValidation(lastname.trim()) 
                && emailValidaton(email.trim()) && passwordValidaton(password.trim()); 

    if(isValid) {
        Korisnik.getByEmail(email, (nizKorisnika) => {
            if(nizKorisnika.length === 0) { 
                            
                hash(password, 10, (err, hash) => {
                    if(err) throw new Error({message: 'Hashing failed'});
                     
                     const hashedPassword = hash;
                    
                         Korisnik.create(firstname, lastname, email, hashedPassword, async (korisnik) => {
                             console.log(korisnik);
                             const token =  await jwt.sign({id : korisnik.insertId}, process.env.SECRET, {expiresIn: '10m'});                             
                             res.send({accToken: token});
                            })
                        })
            }else {
                res.json({status: 500, message: 'User with this email already exists'});
            }
    })
    }else {
        res.json({status: 511, message : 'Wrong data inputs'});
    }

}


exports.getTeams = (req, res) => { // dodati jednom kalkulaciju
    const token = req.headers['authorization'].split(' ')[1]


    jwt.verify(token, process.env.SECRET, err => {
        if(err) res.json({status: 401, message: 'User not authorized'});
            
            Promise.all([Team.getAllTeams(), Stadium.getAllStadiums(), Budget.getAllBudgets(), 
                Description.getAllDescriptions(), Location.getAllLocations()]).then((models) => {
                    res.json(handleTeamStructure(models)); 
                });
    })
    
}

exports.selectTeam = (req, res) => { // LogOut na klijentskoj strani obrsati token iz localStorage
    // protected route
    console.log(req.body)
    const team_id = req.body.team_id;
    const token = req.headers['authorization'].split(' ')[1];
    
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err) res.json({status: 401, message: 'User unauthorized'})
            // treba proveriti da li vec vlasnik postoji

            VlasnikTima.create(decoded.id, team_id, (vlasnik) => {
                Lineup.insertUserLineup(decoded.id, (message) => {
                    res.json({status: 200, message: 'Permision granted'});
                })
            })
    });
    
    //const paresedUser = JSON.parse(Buffer.from(req.body.user_id.split('.')[1], 'base64').toString('binary'))['id'];
    

}












