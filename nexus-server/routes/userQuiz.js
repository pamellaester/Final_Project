const express = require("express");
const userController = require("../controllers/user-Controller");

const router = express.Router();

router.post("/:id", userController.saveQuizResponses);

module.exports = router;
