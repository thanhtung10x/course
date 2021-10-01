const express = require('express');
const router = express.Router();

//inport file NewsController.js
const meController = require('../app/controllers/MeController');

router.get('/store/courses', meController.storeCourses);

module.exports = router;
