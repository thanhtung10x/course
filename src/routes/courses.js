const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");
const auth = require("../app/middelwares/Auth");

router.get("/create", auth.authen, courseController.create);
router.post("/store", auth.authen, courseController.store);
router.get("/:id/edit", auth.authen, courseController.edit);
router.put("/:id", auth.authen, courseController.update);
router.patch("/:id/restore", auth.authen, courseController.restore);
router.delete("/:id", auth.authen, courseController.destroy);
router.delete("/:id/force", auth.authen, courseController.forceDestroy);
router.get("/:slug", auth.authen, courseController.show);

module.exports = router;
