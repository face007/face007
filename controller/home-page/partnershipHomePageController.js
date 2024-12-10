const PartnershipHomePage = require("../../models/home-page/partnershipHomePage");

// Create a new Partnership Logo
exports.createPartnershipHomePage = async (req, res) => {
  try {
    const newPartnership = new PartnershipHomePage(req.body);
    await newPartnership.save();
    res.status(201).json(newPartnership);
  } catch (error) {
    res.status(500).json({
      message: "Error creating Partnership logo",
      error,
    });
  }
};

// Get all Partnership Logos
exports.getPartnershipHomePages = async (req, res) => {
  try {
    const partnerships = await PartnershipHomePage.find();
    res.status(200).json(partnerships);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Partnership logos",
      error,
    });
  }
};

// Get a single Partnership Logo by ID
exports.getPartnershipHomePageById = async (req, res) => {
  try {
    const partnership = await PartnershipHomePage.findById(req.params.id);
    if (!partnership) {
      return res.status(404).json({ message: "Partnership logo not found" });
    }
    res.status(200).json(partnership);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Partnership logo",
      error,
    });
  }
};

// Update a Partnership Logo by ID
exports.updatePartnershipHomePage = async (req, res) => {
  try {
    const updatedPartnership = await PartnershipHomePage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPartnership) {
      return res.status(404).json({ message: "Partnership logo not found" });
    }
    res.status(200).json(updatedPartnership);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Partnership logo",
      error,
    });
  }
};

// Delete a Partnership Logo by ID
exports.deletePartnershipHomePage = async (req, res) => {
  try {
    const deletedPartnership = await PartnershipHomePage.findByIdAndDelete(
      req.params.id
    );
    if (!deletedPartnership) {
      return res.status(404).json({ message: "Partnership logo not found" });
    }
    res.status(200).json({ message: "Partnership logo deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Partnership logo",
      error,
    });
  }
};
