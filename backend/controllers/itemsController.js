import asyncHandler from "express-async-handler";

import Item from "../models/itemModel.js";
import User from "../models/userModel.js";

//@desc    Get items
//@route   GET /items
//@access  Private
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
});

//@desc    Set item
//@route   POST /items
//@access  Private
const setItem = asyncHandler(async (req, res) => {
  if (!req.body.header || !req.body.price) {
    res.status(400);
    throw new Error("Item header and price are required");
  }
  const item = await Item.create({
    header: req.body.header,
    price: req.body.price,
    description: req.body.description || "",
    img: req.body.img || "",
    user: req.user.id,
  });
  res.status(200).json(item);
});

//@desc    Update item
//@route   PUT /item/:id
//@access  Private
const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) {
    res.status(400);
    throw new Error("Item not found");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the loggedin user matches the item user
  if (item.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedItem);
});

//@desc    Delete item
//@route   DELETE /item/:id
//@access  Private
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) {
    res.status(400);
    throw new Error("Item not found");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the loggedin user matches the item user
  if (item.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await item.remove();
  res.status(200).json({ id: req.params.id });
});

export { getItems, setItem, updateItem, deleteItem };
