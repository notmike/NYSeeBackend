import mongoose from 'mongoose';
import Station from './models/station';

const stations = [
  {
    stationName: 'Fulton Street Station',
    entrance: 'Fulton Street',
    exit: 'Broadway & Nassau Street',
    steps: [],
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/stations');

// Go through each station
stations.map(data => {
  // Initialize a model with station data
  const station = new Station(data);
  // and save it into the database
  station.save();
});
