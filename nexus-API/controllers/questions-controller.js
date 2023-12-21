const Questions = require("../models/questions-model");

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Questions.getAllQuestions();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch questions" });
  }
};

module.exports = {
  getAllQuestions,
};
