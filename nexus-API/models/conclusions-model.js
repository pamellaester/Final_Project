const db = require("../config/database");

const getAllConclusions = async () => {
  return await db("conclusion_options").select("*");
};

module.exports = {
  getAllConclusions,
};
