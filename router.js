// Import index action from station controller
const StationsController = require('./controllers/stations');

var router = require('express').Router();

// Handle /stations.json route with index action from stations controller
router.route('/stations.json')
  .get(StationsController.index);

module.exports = router;
