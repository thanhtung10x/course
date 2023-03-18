const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");
const newsController = require("../app/controllers/NewsController");
const auth = require("../app/middelwares/Auth");

router.get("/trash/courses", auth.authen, meController.trashCourses);
router.get("/stored/courses", auth.authen, meController.storedCourses);
router.get("/stored/news", auth.authen, newsController.index);
router.get("/stored/news/:slug", auth.authen, newsController.show);

module.exports = router;
