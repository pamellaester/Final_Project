const bcrypt = require("bcrypt");
const UserModel = require("../Models/user-model");
const HashPwdModel = require("../Models/hashPwdModel");

const UserController = {
  register: async (req, res) => {
    try {
      const { first_name, last_name, username, email, password } = req.body;
      console.log("req.body",req.body)

      const hashedPassword = await bcrypt.hash(password, 10);

      const existingUser = await UserModel.findOne({ username });

      if (existingUser) {
        return res.status(202).json({ error: "Username already exists" });
      }

      const newUser = await UserModel.create({
        first_name,
        last_name,
        username,
        email,
      });

      console.log("new_user:",newUser)

      if (!newUser || !newUser.id) {
        return res.status(500).json({ error: "Failed to create user" });
      }

      await HashPwdModel.create({
        user_id: newUser.id,
        username,
        password: hashedPassword,
      });

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      if (error.code === "23505" || error.constraint === "users_username_key") {
        res.status(400).json({ error: "Username already exists" });
      } else {
        res.status(500).json({ error: `Error registering user ${error}` });
      }
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const hashedPassword = await HashPwdModel.findOne({ user_id: user.id });
  
      if (!hashedPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const passwordMatch = await bcrypt.compare(password, hashedPassword.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      res.status(200).json({ message: "Login successful", user: user.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error logging in" });
    }
  },

  logout: async (req, res) => {
    res.status(200).json({ message: "Logout successful" });
  },
};

module.exports = UserController;
