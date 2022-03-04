const schedule = require('./schedule');


exports.scheduleGetter = (req, res) => {
        schedule.getScedule((schedule) => {
                res.json(schedule);
        })
}










