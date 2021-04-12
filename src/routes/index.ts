import express from 'express';
const router = express.Router();

const apiRoute = '/api/';

router.use(apiRoute, require('../classes/Records/RecordRouter'));

module.exports = router;
