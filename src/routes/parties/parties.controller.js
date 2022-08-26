const parties = require('../../models/parties.model')

function httpGetAllParties(req,res){
  return res.status(200).json(parties)
}

module.exports = {
  httpGetAllParties,
}