const express = require("express");
const { registerUser} = require("../controllers/authController.js");

const router = express.Router();
console.log(registerUser)
// Ensure that the functions are passed correctly to the routes
router.post("/register", registerUser);
// router.post("/login", loginUser);

// export the router
module.exports = router;
