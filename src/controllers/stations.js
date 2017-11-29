const Station = require('../models/station');
const moment = require('moment');

exports.index = function(req, res, next) {
  // Find all stations and return json response
  Station.find().lean().exec((err, stations) => res.json({ stations: stations.map(station => ({
      ...station,
    }))}
  ));
}
