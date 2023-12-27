const db = require("../config/database");

const safeSpaceModel = {
  createFormData: async ({ user_id, username, date, level,triggers, negative_thoughts  }) => {
    try {
      const result = await db("safe_space_data").insert({
        user_id,
        username,
        date,
        level,
        triggers,
        negative_thoughts,
      });
      return result;
    } catch (error) {
      console.error("Error inserting data:", error.message);
      throw new Error(`Error inserting data into safe_space_data table: ${error.message}`);
    }
  },

  findOne: async (query) => {
    try {
      return await db('safe_space_data').where(query);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = safeSpaceModel;
