const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define station schema
var stationSchema = new Schema({
  stationName: {
    type: String,
    unique: true,
  },
  entrance: String,
  exit: String,
  steps: Array,
});

// Export Mongoose model
module.exports = mongoose.model('station', stationSchema);
