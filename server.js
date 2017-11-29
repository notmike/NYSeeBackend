const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');

var mongodb = require("mongodb");


// Initialize http server
const app = express();

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  // // Connect to MongoDB
  mongoose.connect('mongodb://localhost/stations');
}

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);

var PORT = process.env.PORT || 3000;

console.log('Listening on', PORT);
app.listen(PORT);


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
// 2) localhost:5000/v1/stations.json
