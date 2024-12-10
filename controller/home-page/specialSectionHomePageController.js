const SpecialSectionHomePage = require('../../models/home-page/specialSectionHomePage'); 

// Create a new Special Section Home Page entry
exports.createSpecialSectionHomePage = async (req, res) => {
  try {
    const newSpecialSectionHomePage = new SpecialSectionHomePage(req.body);
    await newSpecialSectionHomePage.save();
    res.status(201).json(newSpecialSectionHomePage);
  } catch (error) {
    res.status(500).json({
      message: "Error creating Special Section Home Page",
      error,
    });
  }
};

// Get all Special Section Home Page entries
exports.getAllSpecialSectionHomePages = async (req, res) => {
  try {
    const SpecialSectionHomePages = await SpecialSectionHomePage.find();
    res.status(200).json(SpecialSectionHomePages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Special Section Home Pages",
      error,
    });
  }
};

// Get a single Special Section Home Page by ID
exports.getSpecialSectionHomePageById = async (req, res) => {
  try {
    const specialSectionHomePage = await SpecialSectionHomePage.findById(req.params.id);
    if (!specialSectionHomePage) {
      return res.status(404).json({ message: 'Special Section Home Page not found' });
    }
    res.status(200).json(specialSectionHomePage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Special Section Home Page",
      error,
    });
  }
};

// Update a Special Section Home Page by ID
exports.updateSpecialSectionHomePageById = async (req, res) => {
  try {
    const updatedSpecialSectionHomePage = await SpecialSectionHomePage.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedSpecialSectionHomePage) {
      return res.status(404).json({ message: 'Special Section Home Page not found' });
    }
    res.status(200).json(updatedSpecialSectionHomePage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Special Section Home Page",
      error,
    });
  }
};

// Delete a Special Section Home Page by ID
exports.deleteSpecialSectionHomePageById = async (req, res) => {
  try {
    const deletedSpecialSectionHomePage = await SpecialSectionHomePage.findByIdAndDelete(req.params.id);
    if (!deletedSpecialSectionHomePage) {
      return res.status(404).json({ message: 'Special Section Home Page not found' });
    }
    res.status(200).json({ message: 'Special Section Home Page deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Special Section Home Page",
      error,
    });
  }
};

// Add a new special section to the Special Section Home Page
exports.addSpecialSection = async (req, res) => {
  try {
    const { id } = req.params; 
    const newSection = req.body;

    const updatedHomePage = await SpecialSectionHomePage.findByIdAndUpdate(
      id,
      { $push: { home_special_section: newSection } },
      { new: true }
    );

    if (!updatedHomePage) {
      return res.status(404).json({ message: 'Special Section Home Page not found' });
    }

    res.status(200).json(updatedHomePage);
  } catch (error) {
    res.status(500).json({
      message: "Error adding special section",
      error,
    });
  }
};

// Update a single special section by its ID
exports.updateSpecialSection = async (req, res) => {
  try {
    const { id, sectionId } = req.params; 
    const { image, title, detail } = req.body;

    const updatedHomePage = await SpecialSectionHomePage.findOneAndUpdate(
      { _id: id, "home_special_section._id": sectionId },
      {
        $set: {
          "home_special_section.$.image": image,
          "home_special_section.$.title": title,
          "home_special_section.$.detail": detail,
        },
      },
      { new: true }
    );

    if (!updatedHomePage) {
      return res.status(404).json({ message: 'Special section or page not found' });
    }

    res.status(200).json(updatedHomePage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating special section",
      error,
    });
  }
};

// Delete a single special section by its ID
exports.deleteSpecialSection = async (req, res) => {
  try {
    const { id, sectionId } = req.params; 

    const updatedHomePage = await SpecialSectionHomePage.findByIdAndUpdate(
      id,
      { $pull: { home_special_section: { _id: sectionId } } },
      { new: true }
    );

    if (!updatedHomePage) {
      return res.status(404).json({ message: 'Special section or page not found' });
    }

    res.status(200).json(updatedHomePage);
  } catch (error) {
    res.status(500).json({
      message: "Error deleting special section",
      error,
    });
  }
};
