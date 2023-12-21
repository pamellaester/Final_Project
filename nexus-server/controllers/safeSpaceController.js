const safeSpaceModel = require('../Models/safeSpaceModel');

const safeSpaceController = {
  createFormData: async (req, res) => {
    try {
      const { user_id,username,feeling, cause, negative_thoughts } = req.body;

      await safeSpaceModel.createFormData({ user_id, username, feeling, cause, negative_thoughts });
      res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  },
};

module.exports = safeSpaceController;
