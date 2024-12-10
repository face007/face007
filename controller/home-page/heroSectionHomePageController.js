const HeroSectionHomePage = require("../../models/home-page/heroSectionHomePage");

// Create a new Hero Section for the Home Page
exports.createHeroSectionHomePage = async (req, res) => {
  try {
    const newHeroSection = new HeroSectionHomePage(req.body);
    await newHeroSection.save();
    res.status(201).json(newHeroSection);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating Hero Section for Home Page", error });
  }
};

// Get all Hero Sections for the Home Page
exports.getHeroSectionHomePages = async (req, res) => {
  try {
    const heroSections = await HeroSectionHomePage.find();
    res.status(200).json(heroSections);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching Hero Sections for Home Page", error });
  }
};

// Get a single Hero Section by ID
exports.getHeroSectionHomePageById = async (req, res) => {
  try {
    const heroSection = await HeroSectionHomePage.findById(req.params.id);
    if (!heroSection) {
      return res.status(404).json({ message: "Hero Section not found" });
    }
    res.status(200).json(heroSection);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching Hero Section for Home Page", error });
  }
};

// Update a Hero Section by ID
exports.updateHeroSectionHomePage = async (req, res) => {
  try {
    const updatedHeroSection = await HeroSectionHomePage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedHeroSection) {
      return res.status(404).json({ message: "Hero Section not found" });
    }
    res.status(200).json(updatedHeroSection);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating Hero Section for Home Page", error });
  }
};

// Delete a Hero Section by ID
exports.deleteHeroSectionHomePage = async (req, res) => {
  try {
    const deletedHeroSection = await HeroSectionHomePage.findByIdAndDelete(
      req.params.id
    );
    if (!deletedHeroSection) {
      return res.status(404).json({ message: "Hero Section not found" });
    }
    res.status(200).json({ message: "Hero Section deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Hero Section for Home Page", error });
  }
};
