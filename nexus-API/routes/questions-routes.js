const express = require("express");
const router = express.Router()
const questionsController = require("../controllers/questions-controller")

router.get("/", questionsController.getAllQuestions);

module.exports = router;