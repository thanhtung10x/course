const express = require("express");
const router = express.Router();

const AuthController = require("../app/controllers/AuthController");

router.get("/login", AuthController.loginView);
router.get("/register", AuthController.registerView);

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.post("/logout", AuthController.logout);

module.exports = router;
