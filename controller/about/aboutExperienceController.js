const AboutExperience = require("../../models/about/aboutExperience");

// Create a new AboutExperience
exports.createAboutExperience = async (req, res) => {
  try {
    const aboutExperience = new AboutExperience(req.body);
    await aboutExperience.save();
    res
      .status(201)
      .json({
        message: "AboutExperience created successfully!",
        aboutExperience,
      });
  } catch (error) {
    res.status(400).json({ message: "Error creating AboutExperience", error });
  }
};

// Get all AboutExperiences
exports.getAllAboutExperiences = async (req, res) => {
  try {
    const aboutExperiences = await AboutExperience.find();
    res.status(200).json(aboutExperiences);
  } catch (error) {
    res.status(500).json({ message: "Error fetching AboutExperiences", error });
  }
};

// Get a single AboutExperience by ID
exports.getAboutExperienceById = async (req, res) => {
  try {
    const aboutExperience = await AboutExperience.findById(req.params.id);
    if (!aboutExperience) {
      return res.status(404).json({ message: "AboutExperience not found" });
    }
    res.status(200).json(aboutExperience);
  } catch (error) {
    res.status(500).json({ message: "Error fetching AboutExperience", error });
  }
};

// Update an AboutExperience by ID
exports.updateAboutExperience = async (req, res) => {
  try {
    const aboutExperience = await AboutExperience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!aboutExperience) {
      return res.status(404).json({ message: "AboutExperience not found" });
    }
    res
      .status(200)
      .json({
        message: "AboutExperience updated successfully!",
        aboutExperience,
      });
  } catch (error) {
    res.status(400).json({ message: "Error updating AboutExperience", error });
  }
};

// Delete an AboutExperience by ID
exports.deleteAboutExperience = async (req, res) => {
  try {
    const aboutExperience = await AboutExperience.findByIdAndDelete(
      req.params.id
    );
    if (!aboutExperience) {
      return res.status(404).json({ message: "AboutExperience not found" });
    }
    res.status(200).json({ message: "AboutExperience deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting AboutExperience", error });
  }
};
