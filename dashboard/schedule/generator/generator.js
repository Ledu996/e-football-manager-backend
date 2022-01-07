const db = require('../../../config/db');

  const matchParticipants = (participants) => {
    const p = Array.from(participants);
    if (p % 2 == 1) {
      p.push(null);
    }
    const pairings = [];
    while (p.length != 0) {
      participantA = p.shift();
      participantB = p.pop();
      if (participantA != undefined && participantB != undefined) {
        pairings.push(participantA, participantB); // []
      }
    }
    return pairings;
  };
  
  const rotateArray = (array) => {
    const p = Array.from(array);
    const firstElement = p.shift();
    const lastElement = p.pop();
    return [firstElement, lastElement, ...p]; // 1, 20, 2, 3, 4, 5, 6 ... 19
  };
  
  const generateTournament = (participants) => {
    const tournamentRounds = [];
    const rounds = Math.ceil(participants.length - 1); // 19
    let p = Array.from(participants);
    for (let i = 0; i < rounds; i++) {
      tournamentRounds.push(matchParticipants(p));
      p = rotateArray(p);
    }
    return tournamentRounds;
  };
  


const generator = (callback) => {
    db.query('SELECT * FROM team', (err, team) => {
        if(!err) {
            let generatedArray = generateTournament(team); // iz nekog razloga ovde  fali 1
            callback(generatedArray); // 
        }else{
            console.log(err); 
        }
    })
};

module.exports = generator;









/*const times = ['13:30:00 PM', '16:00:00 PM', '18:30:00', '21:00:00'];
const mounths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let date = 12;
let mount = 8;
let year = 2021;
for(let i = 0; i < 7; i++) {
    console.log(``)
}*/









