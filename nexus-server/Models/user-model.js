const { u } = require("tar");
const db = require("../config/database");

const UserModel = {
  create: async ({ username, email }) => {
    try {
      const [userId] = await db("users")
        .insert({
          username,
          email,
        })
        .returning("id");
      return userId;
    } catch (error) {
      throw error;
    }
  },

  findOne: async (query) => {
    try {
      return await db("users").where(query).first();
    } catch (error) {
      throw error;
    }
  },

  findAll: async () => {
    try {
      return await db("users").select("*");
    } catch (error) {
      throw error;
    }
  },

  findByPk: async (id) => {
    try {
      const user = await db("users").where({ id }).first();
      return user;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, fieldsToUpdate) => {
    try {
      await db("users").where({ id }).update(fieldsToUpdate);
    } catch (error) {
      throw error;
    }
  },

  create_user_profile: async (quizResponses) => {
    try {
      await db("user_quiz_responses").insert(quizResponses);
    } catch (error) {
      throw error;
    }
  },
  
};

module.exports = UserModel;
