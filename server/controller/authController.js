const User = require("../models/UserSchema.js");
bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createJWT = require("../utils/createJWT");
const createCookie = require("../utils/createCookie.js");

const saltRounds = parseInt(process.env.SALT);

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).send({ msg: "Email and password are required" });
      }

      // Find user in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({ msg: "User not found" });
      }

      // Check if the password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(401).send({ msg: "Invalid password" });
      }

      // Generate JWT and set cookies
      const role = user.role || "user"; // Default role
      const jwtToken = createJWT(email, role);

      res.cookie("jwt", jwtToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 5, // 5 days
        secure: process.env.NODE_ENV === "production", // Secure only in production
      });

      createCookie(res, jwtToken);

      res.status(200).send({ msg: "Login successful", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },

  register: async (req, res) => {
    try {
      const { email, password, repeatPassword } = req.body;

      // Validate input
      if (!email || !password || !repeatPassword) {
        return res.status(400).send({ msg: "All fields are required" });
      }
      if (password !== repeatPassword) {
        return res.status(400).send({ msg: "Passwords do not match" });
      }

      // Hash password
      const hash = await bcrypt.hash(password, saltRounds);

      // Create user
      const role = "user";
      const user = new User({ email, password: hash, role });

      await user.save();

      // Generate JWT and set cookies
      const jwtToken = createJWT(email, role);
      res.cookie("jwt", jwtToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 5, // 5 days
        secure: process.env.NODE_ENV === "production",
      });

      createCookie(res, jwtToken);

      res.status(201).send({ msg: "User created successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
};

module.exports = authController;
