const express = require('express')
const app = express();
const cors= require("cors");
const bodyParser = require('body-parser');
const authRoutes = require('./auth/routes');
const scheduleRoutes = require('./dashboard/schedule/routes')
const generator = require('./dashboard/schedule/generator/routes');
const lineupRoutes = require('./dashboard/lineup/routes');
const gameRoutes = require('./dashboard/game/routes');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());



app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Authorization');

   // Set to true if you need the website to include cookies in the requests sent
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
});

app.use('/auth', authRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/generate', generator);
app.use('/lineup', lineupRoutes);
app.use('/dashboard', gameRoutes)



/*
app.use(cors({
   origin : '*' ,
}))*/

/*
const corsOptions ={
   origin: '*', 
   credentials: true,            //access-control-allow-credentials:true
   optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
*/






app.listen(5000);





/*

*/
