const camps = require('../../models/camps.model')

function httpGetAllCamps(req,res){
  return res.status(200).json(camps)
}

module.exports = {
  httpGetAllCamps
}