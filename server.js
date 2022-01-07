const express = require('express')
const app = express();
const authRoutes = require('./auth/routes')
const scheduleRoutes = require('./dashboard/schedule/routes')
const generator = require('./dashboard/schedule/generator/routes');
const lineupRoutes = require('./dashboard/lineup/routes');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/generate', generator);
app.use('/lineup', lineupRoutes);

app.listen(5000);

/*

*/
