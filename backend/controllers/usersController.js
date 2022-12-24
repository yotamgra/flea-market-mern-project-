import asyncHandler from "express-async-handler";

//@desc    Register new user
//@route   POST /users
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

//@desc    Authenticate a user
//@route   POST /users/login
//@access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login User" });
});

//@desc    Get user data
//@route   GET /users/me
//@access  Public
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User data display" });
});


export { registerUser, loginUser, getMe };
