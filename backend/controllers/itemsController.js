import asyncHandler from "express-async-handler";

import Item from "../models/itemModel.js";

//@desc    Get items
//@route   GET /api/items
//@access  Private
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
});

//@desc    Set item
//@route   POST /api/items
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
  });
  res.status(200).json(item);
});

//@desc    Update item
//@route   PUT /api/item/:id
//@access  Private
const updateItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if(!item){
        res.status(400);
    throw new Error("Item not found");
    }
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(updatedItem);
});

//@desc    Delete item
//@route   DELETE /api/item/:id
//@access  Private
const deleteItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete item ${req.params.id}` });
});

export { getItems, setItem, updateItem, deleteItem };
