import express from 'express';
const router = express.Router();

const apiRoute = '/api/';

router.use(apiRoute, require('../classes/Records/RecordRouter'));
router.use(apiRoute, require('../classes/Nutrition/NutritionRouter'));
router.use(apiRoute, require('../classes/Workouts/WorkoutRouter'));

module.exports = router;