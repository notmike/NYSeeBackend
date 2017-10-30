import mongoose, { Schema } from 'mongoose';

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
export default mongoose.model('station', stationSchema);
