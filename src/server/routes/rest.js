import express from 'express';
import carsController from '../controllers/cars';

const router = express.Router();

// Areas
router.route('/cars')
.get((req, res) => { carsController.getAll(req, res); })
.post((req, res) => { carsController.createOne(req, res); });

export default router;
