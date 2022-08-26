const clubs = require('../../models/clubs.model')

function httpGetAllClubs(req,res){
  return res.status(200).json(clubs)
}

module.exports = {
  httpGetAllClubs,
}