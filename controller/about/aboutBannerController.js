const AboutBanner = require("../../models/about/aboutBanner");

// Create a new AboutBanner
exports.createAboutBanner = async (req, res) => {
  try {
    const aboutBanner = new AboutBanner(req.body);
    await aboutBanner.save();
    res
      .status(201)
      .json({ message: "AboutBanner created successfully!", aboutBanner });
  } catch (error) {
    res.status(400).json({ message: "Error creating AboutBanner", error });
  }
};

// Get all AboutBanners
exports.getAllAboutBanners = async (req, res) => {
  try {
    const aboutBanners = await AboutBanner.find();
    res.status(200).json(aboutBanners);
  } catch (error) {
    res.status(500).json({ message: "Error fetching AboutBanners", error });
  }
};

// Get a single AboutBanner by ID
exports.getAboutBannerById = async (req, res) => {
  try {
    const aboutBanner = await AboutBanner.findById(req.params.id);
    if (!aboutBanner) {
      return res.status(404).json({ message: "AboutBanner not found" });
    }
    res.status(200).json(aboutBanner);
  } catch (error) {
    res.status(500).json({ message: "Error fetching AboutBanner", error });
  }
};

// Update an AboutBanner by ID
exports.updateAboutBanner = async (req, res) => {
  try {
    const aboutBanner = await AboutBanner.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!aboutBanner) {
      return res.status(404).json({ message: "AboutBanner not found" });
    }
    res
      .status(200)
      .json({ message: "AboutBanner updated successfully!", aboutBanner });
  } catch (error) {
    res.status(400).json({ message: "Error updating AboutBanner", error });
  }
};

// Delete an AboutBanner by ID
exports.deleteAboutBanner = async (req, res) => {
  try {
    const aboutBanner = await AboutBanner.findByIdAndDelete(req.params.id);
    if (!aboutBanner) {
      return res.status(404).json({ message: "AboutBanner not found" });
    }
    res.status(200).json({ message: "AboutBanner deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting AboutBanner", error });
  }
};
