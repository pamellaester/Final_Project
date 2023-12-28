const express = require("express");
const userController = require("../controllers/user-Controller");

const router = express.Router();

router.put("/:id", userController.quizCompletion);
router.get('/:id', userController.getQuizCompletionStatus);
module.exports = router;