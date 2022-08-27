const express = require('express');
const cors = require('cors')

const campsRouter = require('./routes/camps/camps.router')
const clubsRouter = require('./routes/clubs/clubs.router')
const partiesRouter = require('./routes/parties/parties.router')


const app = express();

/*
  middleware
*/

const whitelist = ['http://localhost:8080','https://absolutesport.org']
app.use(cors({
  origin: function (origin, callback){
    if (whitelist.indexOf(origin) !== -1){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());

/*
  routes
*/

app.use('/camps', campsRouter);
app.use('/clubs', clubsRouter);
app.use('/parties', partiesRouter);


module.exports = app;