const express = require('express');

const {
  httpGetAllCamps,
} = require('./camps.controller');

const campsRouter = express.Router();

campsRouter.get('/camps', httpGetAllCamps);

module.exports = campsRouter;