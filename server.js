const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');


// Initialize http server
const app = express();

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MONGO_URL);
} else {
  // // Connect to MongoDB
  mongoose.connect('mongodb://localhost/stations');
}

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '127.0.0.1';

console.log('Listening on', HOST, PORT);
app.listen(PORT, HOST);


// // Logger that outputs all requests into the console
// app.use(morgan('combined'));
// // Use v1 as prefix for all API endpoints
// app.use('/v1', router);
//
// const server = app.listen(3000, () => {
//   const { address, port } = server.address();
//   console.log(`Listening at http://${address}:${port}`);
// });

// 1) npm start
// 2) http://127.0.0.1:3000/v1/stations.json
