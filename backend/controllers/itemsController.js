import asyncHandler from "express-async-handler";

//@desc    Get items
//@route   GET /api/items
//@access  Private
const getItems = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get items" });
});

//@desc    Set item
//@route   POST /api/items
//@access  Private
const setItems = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set items" });
});

//@desc    Update item
//@route   PUT /api/item/:id
//@access  Private
const updateItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update item ${req.params.id}` });
});

//@desc    Delete item
//@route   DELETE /api/item/:id
//@access  Private
const deleteItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete item ${req.params.id}` });
});

export { getItems, setItems, updateItem, deleteItem };
