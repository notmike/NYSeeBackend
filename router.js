import express, { Router } from 'express';
// Import index action from station controller
import { index } from './controllers/stations';

// Initialize the router
const router = Router();

// Handle /stations.json route with index action from stations controller
router.route('/stations.json')
  .get(index);

export default router;
