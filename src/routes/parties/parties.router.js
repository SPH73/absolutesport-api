const express = require('express');

const {
  httpGetAllParties
} = require('./parties.controller')

const partiesRouter = express.Router();

partiesRouter.get('/parties', httpGetAllParties)

module.exports = partiesRouter;