const express = require('express');

const {
  httpGetAllCamps,
} = require('./camps.controller');

const campsRouter = express.Router();

campsRouter.get('/', httpGetAllCamps);

module.exports = campsRouter;