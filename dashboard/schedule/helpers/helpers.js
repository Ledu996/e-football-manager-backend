//require('dotenv').config(); //process.env.PREM_START_DATE;
const helpers = {}


let date = '2021-09-12';  // oldDate = date, vracam date

helpers.setDateRounds = (callback) => { 

    const numArray = date.split('-').map(Number) // [2021, 09, 12]
    let [year, month, day] = [numArray[0], numArray[1], numArray[2]];
    const mounths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let newDate;    
        
        day = day + 7 < mounths[month - 1] ? day + 7 : day + 7 - mounths[month - 1]; //day > mounths[month - 1] ? 1 : day += 7; 
        month = day + 7 < mounths[month - 1] ? month : month + 1; 
        year = month < 12 ? year : year++;
                
        newDate =  `${year}-${month}-${day}`;
        callback(date);
        date = newDate;
};

                        
helpers.setGameTime = (time) => {
    const gameTime = ['13:30:00', '16:00:00', '18:30:00', '21:00:00'];
    const matchTime = gameTime[time];
    time++; 
    return matchTime;
};


module.exports = helpers;