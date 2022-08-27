const campsList = require('../../models/camps.model')

function httpGetAllCamps(req,res){
  return res.status(200).json(campsList)
}

module.exports = {
  httpGetAllCamps
}