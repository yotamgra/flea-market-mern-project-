import mongoose from "mongoose";

const Item = mongoose.Schema(
  {
    header: {
      type: String,
      required: [true, "Please add an item header"],
    },
    price: {
      type: String,
      required: [true, "Please add an item price"],
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export { Item };
