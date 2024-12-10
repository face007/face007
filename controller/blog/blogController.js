const Blog = require("../../models/blog/blog"); 

// Create a new blog entry
exports.createBlog = async (req, res) => {
  try {
    const { image, title, thumbnail_text, details } = req.body;
    const newBlog = new Blog({
      image,
      title,
      thumbnail_text,
      details,
    });
    await newBlog.save();
    res.status(201).json({
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating blog", error: error.message });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching blogs", error: error.message });
  }
};

// Get a single blog by ID and increment views
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } }, 
      { new: true } 
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching blog", error: error.message });
  }
};

// Update a blog entry
exports.updateBlog = async (req, res) => {
  try {
    const { image, title, thumbnail_text, details } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { image, title, thumbnail_text, details },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating blog", error: error.message });
  }
};

// Delete a blog entry
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting blog", error: error.message });
  }
};
