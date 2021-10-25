import express from 'express';
const router = express.Router();

const apiRoute = '/api/';

router.use(apiRoute, require('./CalendarRouter'));
router.use(apiRoute, require('./PlanRouter'));

module.exports = router;