const db = require("../config/database");

const safeSpaceModel = {
  createFormData: async ({ user_id, username, feeling, cause, negative_thoughts  }) => {
    try {
      const result = await db("safe_space_data").insert({
        user_id,
        username,
        feeling,
        cause,
        negative_thoughts,
      });
      return result;
    } catch (error) {
      console.error("Error inserting data:", error.message);
      throw new Error(`Error inserting data into safe_space_data table: ${error.message}`);
    }
  },
};

module.exports = safeSpaceModel;
