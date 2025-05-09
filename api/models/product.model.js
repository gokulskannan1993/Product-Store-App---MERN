import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
// The product model defines the structure of the product data in the database.
// It includes fields for the product name, price, and image URL.
// The timestamps option automatically adds createdAt and updatedAt fields to the schema.