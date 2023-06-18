const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    description: { type: String, default: "New Product" },
    createdAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("Products", DataSchema);
module.exports = ProductModel;
