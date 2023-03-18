const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");
const auth = require("../app/middelwares/Auth");

router.get("/:slug", auth.authen, newsController.show);
router.get("/", auth.authen, newsController.index);

module.exports = router;
