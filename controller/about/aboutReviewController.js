const AboutReview = require("../../models/about/aboutReview");

// Create a new AboutReview
exports.createAboutReview = async (req, res) => {
  try {
    const aboutReview = new AboutReview(req.body);
    await aboutReview.save();
    res
      .status(201)
      .json({ message: "AboutReview created successfully!", aboutReview });
  } catch (error) {
    res.status(400).json({ message: "Error creating AboutReview", error });
  }
};

// Get all AboutReviews
exports.getAllAboutReviews = async (req, res) => {
  try {
    const aboutReviews = await AboutReview.find();
    res.status(200).json(aboutReviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching AboutReviews", error });
  }
};

// Get a single AboutReview by ID
exports.getAboutReviewById = async (req, res) => {
  try {
    const aboutReview = await AboutReview.findById(req.params.id);
    if (!aboutReview) {
      return res.status(404).json({ message: "AboutReview not found" });
    }
    res.status(200).json(aboutReview);
  } catch (error) {
    res.status(500).json({ message: "Error fetching AboutReview", error });
  }
};

// Update an AboutReview by ID
exports.updateAboutReview = async (req, res) => {
  try {
    const aboutReview = await AboutReview.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!aboutReview) {
      return res.status(404).json({ message: "AboutReview not found" });
    }
    res
      .status(200)
      .json({ message: "AboutReview updated successfully!", aboutReview });
  } catch (error) {
    res.status(400).json({ message: "Error updating AboutReview", error });
  }
};

// Delete an AboutReview by ID
exports.deleteAboutReview = async (req, res) => {
  try {
    const aboutReview = await AboutReview.findByIdAndDelete(req.params.id);
    if (!aboutReview) {
      return res.status(404).json({ message: "AboutReview not found" });
    }
    res.status(200).json({ message: "AboutReview deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting AboutReview", error });
  }
};
