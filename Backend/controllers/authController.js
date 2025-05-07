const User = require('../models/User.js');
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await User.create({
      fullName,
      email,
      password,
      profileImageUrl,
    });

    return res.status(201).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });

  } catch (err) {
    return res.status(500).json({
      message: "Error registering user",
      error: err.message,
    });
  }
};

// Similarly for loginUser and getUserInfo