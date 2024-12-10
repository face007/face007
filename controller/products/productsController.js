const Products = require("../../models/products/products");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const {
      alignment,
      img,
      title,
      detailText_one,
      detailText_two,
      carouselImg,
    } = req.body;

    const newProduct = new Products({
      alignment,
      img,
      title,
      detailText_one,
      detailText_two,
      carouselImg,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const {
      alignment,
      img,
      title,
      detailText_one,
      detailText_two,
      carouselImg,
    } = req.body;

    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      { alignment, img, title, detailText_one, detailText_two, carouselImg },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
};

// Add a new carousel image
exports.addCarouselImage = async (req, res) => {
  try {
    const { img } = req.body;
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.carouselImg.push({ img });
    await product.save();

    res.status(201).json({
      message: "Carousel image added successfully",
      data: product,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding carousel image", error: error.message });
  }
};

// Delete a carousel image by ID
exports.deleteCarouselImage = async (req, res) => {
  try {
    const { imageId } = req.params;
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const carouselImageIndex = product.carouselImg.findIndex(
      (img) => img._id.toString() === imageId
    );

    if (carouselImageIndex === -1) {
      return res.status(404).json({ message: "Carousel image not found" });
    }
    product.carouselImg.splice(carouselImageIndex, 1);
    await product.save();

    res.status(200).json({
      message: "Carousel image deleted successfully",
      data: product,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting carousel image", error: error.message });
  }
};
