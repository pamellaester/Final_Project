const db = require("../config/database");

const HashPwdModel = {
  create: async ({ user_id, username, password }) => {
    try {
      await db("hashpwd").insert({ user_id, username, password });
    } catch (error) {
      throw error;
    }
  },

  findOne: async (query) => {
    try {
      return await db("hashpwd").where(query).first();
    } catch (error) {
      throw error;
    }
  },
};

module.exports = HashPwdModel;
