import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

//@desc    Register new user
//@route   POST /users
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send("Please add all fields")
    return
  }

  //Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    
    res.status(400).send("User already exists")
    return
    
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    res.status(400).send("Invalid user data");
    return
  }
});

//@desc    Authenticate a user
//@route   POST /users/login
//@access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400).send("Invalid credentials");
    return
  }
});

//@desc    Get user data
//@route   GET /users/me
//@access  Private
const getMe = asyncHandler(async (req, res) => {
 

  res.status(200).json(req.user)
});

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { registerUser, loginUser, getMe };
