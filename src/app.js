const express = require('express');

const campsRouter = require('./routes/camps/camps.router')
const clubsRouter = require('./routes/clubs/clubs.router')
const partiesRouter = require('./routes/parties/parties.router')


const app = express();

/*
  middleware
*/
app.use(express.json());

/*
  routes
*/

app.use(campsRouter);
app.use(clubsRouter);


module.exports = app;