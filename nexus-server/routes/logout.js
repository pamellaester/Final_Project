const express = require("express");
const userController = require("../controllers/user-Controller");

const router = express.Router();

router.post("/", userController.logout);

module.exports = router;