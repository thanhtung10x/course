const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");
const auth = require("../app/middelwares/Auth");

router.get("/search", auth.authen, siteController.search);
router.get("/", auth.authen, siteController.index);

module.exports = router;
