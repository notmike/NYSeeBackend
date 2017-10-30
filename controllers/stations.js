import Station from '../models/station';
import moment from 'moment';

// have some hardcoded data for now and then you can append them or you can fetch data from get request later on
// const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// // Same for the times
// const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const index = (req, res, next) => {
  // Find all stations and return json response
  Station.find().lean().exec((err, stations) => res.json(
    // Iterate through each movie
    { stations: stations.map(station => ({
      ...station,
      // days,     // and append days
      // times,    // and times to each
    }))}
  ));
};
