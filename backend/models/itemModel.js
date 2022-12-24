import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
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

export default mongoose.model("Item", itemSchema);
