const express = require('express');

const {
  httpGetAllClubs,
} = require('./clubs.controller')

const clubsRouter = express.Router();

clubsRouter.get('/clubs', httpGetAllClubs);

module.exports = clubsRouter;