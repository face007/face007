const AboutKnowMore = require("../../models/about/aboutKnowMore");

// Create a new AboutKnowMore
exports.createAboutKnowMore = async (req, res) => {
  try {
    const aboutKnowMore = new AboutKnowMore(req.body);
    await aboutKnowMore.save();
    res
      .status(201)
      .json({ message: "AboutKnowMore created successfully!", aboutKnowMore });
  } catch (error) {
    res.status(400).json({ message: "Error creating AboutKnowMore", error });
  }
};

// Get all AboutKnowMore entries
exports.getAllAboutKnowMore = async (req, res) => {
  try {
    const aboutKnowMoreEntries = await AboutKnowMore.find();
    res.status(200).json(aboutKnowMoreEntries);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching AboutKnowMore entries", error });
  }
};

// Get a single AboutKnowMore by ID
exports.getAboutKnowMoreById = async (req, res) => {
  try {
    const aboutKnowMore = await AboutKnowMore.findById(req.params.id);
    if (!aboutKnowMore) {
      return res.status(404).json({ message: "AboutKnowMore not found" });
    }
    res.status(200).json(aboutKnowMore);
  } catch (error) {
    res.status(500).json({ message: "Error fetching AboutKnowMore", error });
  }
};

// Update an AboutKnowMore by ID
exports.updateAboutKnowMore = async (req, res) => {
  try {
    const aboutKnowMore = await AboutKnowMore.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!aboutKnowMore) {
      return res.status(404).json({ message: "AboutKnowMore not found" });
    }
    res
      .status(200)
      .json({ message: "AboutKnowMore updated successfully!", aboutKnowMore });
  } catch (error) {
    res.status(400).json({ message: "Error updating AboutKnowMore", error });
  }
};

// Delete an AboutKnowMore by ID
exports.deleteAboutKnowMore = async (req, res) => {
  try {
    const aboutKnowMore = await AboutKnowMore.findByIdAndDelete(req.params.id);
    if (!aboutKnowMore) {
      return res.status(404).json({ message: "AboutKnowMore not found" });
    }
    res.status(200).json({ message: "AboutKnowMore deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting AboutKnowMore", error });
  }
};
