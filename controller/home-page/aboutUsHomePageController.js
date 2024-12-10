const HomeAboutUsPage = require("../../models/home-page/aboutUsHomePage");

// Create a new Home About Us Page entry
exports.createHomeAboutUsPage = async (req, res) => {
  try {
    const newHomeAboutUsPage = new HomeAboutUsPage(req.body);
    await newHomeAboutUsPage.save();
    res.status(201).json(newHomeAboutUsPage);
  } catch (error) {
    res.status(500).json({
      message: "Error creating Home About Us page",
      error,
    });
  }
};

// Get all Home About Us Page entries
exports.getAllHomeAboutUsPages = async (req, res) => {
  try {
    const homeAboutUsPages = await HomeAboutUsPage.find();
    res.status(200).json(homeAboutUsPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home About Us pages",
      error,
    });
  }
};

// Get a single Home About Us Page by ID
exports.getHomeAboutUsPageById = async (req, res) => {
  try {
    const homeAboutUsPage = await HomeAboutUsPage.findById(req.params.id);
    if (!homeAboutUsPage) {
      return res.status(404).json({ message: "Home About Us page not found" });
    }
    res.status(200).json(homeAboutUsPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home About Us page",
      error,
    });
  }
};

// Update a Home About Us Page by ID
exports.updateHomeAboutUsPageById = async (req, res) => {
  try {
    const updatedHomeAboutUsPage = await HomeAboutUsPage.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedHomeAboutUsPage) {
      return res.status(404).json({ message: "Home About Us page not found" });
    }
    res.status(200).json(updatedHomeAboutUsPage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Home About Us page",
      error,
    });
  }
};

// Delete a Home About Us Page by ID
exports.deleteHomeAboutUsPageById = async (req, res) => {
  try {
    const deletedHomeAboutUsPage = await HomeAboutUsPage.findByIdAndDelete(
      req.params.id
    );
    if (!deletedHomeAboutUsPage) {
      return res.status(404).json({ message: "Home About Us page not found" });
    }
    res
      .status(200)
      .json({ message: "Home About Us page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Home About Us page",
      error,
    });
  }
};
