const db = require("../config/database");

const getAllQuestions = async () => {
  return await db("daily_mood_survey_questions").select("*");
};

module.exports = {
  getAllQuestions,
};
