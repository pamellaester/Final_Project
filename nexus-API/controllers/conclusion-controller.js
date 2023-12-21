const Conclusions = require("../models/conclusions-model");

const getAllConclusions = async (req, res) => {
  try {
    const conclusions = await Conclusions.getAllConclusions();
    res.json(conclusions);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch conclusions" });
  }
};

module.exports = {
  getAllConclusions,
};
