const safePlaceModel = require("../Models/safeSpaceModel");

const safeSpaceController = {
  createFormData: async (req, res) => {
    try {
      const { user_id, username, date, level, triggers, negative_thoughts } =
        req.body;

      await safePlaceModel.createFormData({
        user_id,
        username,
        date,
        level,
        triggers,
        negative_thoughts,
      });
      res.status(201).json({ message: "Form data saved successfully" });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  },

  fetchCheckListData: async (req, res) => {
    const user_id = req.params.id;

    try {
      const response = await safePlaceModel.findOne({ user_id });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = safeSpaceController;
