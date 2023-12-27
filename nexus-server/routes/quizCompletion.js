const express = require("express");
const userController = require("../controllers/user-Controller");

const router = express.Router();

router.put("/:id", userController.quizCompletion);

module.exports = router;