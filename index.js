const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
import routes from './src/routes/pathRoutes';

// Initialize http server
const app = express();
const PORT = process.env.PORT || 3000;

// Mongoose connection
if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MONGO_URL);
} else {
  // // Connect to MongoDB
  mongoose.connect('mongodb://localhost/PATHdb', {
    useMongoClient: true
  });
}

// bodyparser setup
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));  // <--- added for testing
app.use(bodyParser.json());

routes(app); // <<---- pathRoutes TEST

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

