import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  // Get all products
  // This route retrieves all products from the database.
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  // Create a new product
  // This route creates a new product in the database.
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  // Update a product
  // This route updates a product in the database using its ID.
  const { id } = req.params;
  const updatedProduct = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  // Delete a product
  // This route deletes a product from the database using its ID.
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// This code defines the controller functions for handling product-related requests.
