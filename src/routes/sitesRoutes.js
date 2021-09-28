const express = require('express');
const router = express.Router();

//inport file NewsController.js
const siteController = require('../app/controllers/SitesController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
