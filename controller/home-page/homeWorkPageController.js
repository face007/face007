const HomeWorkPage = require("../../models/home-page/homeWorkPage");

// Create a new Home Work Page entry
exports.createHomeWorkPage = async (req, res) => {
  try {
    const newHomeWorkPage = new HomeWorkPage(req.body);
    await newHomeWorkPage.save();
    res.status(201).json(newHomeWorkPage);
  } catch (error) {
    res.status(500).json({
      message: "Error creating Home Work page",
      error,
    });
  }
};

// Get all Home Work Page entries
exports.getAllHomeWorkPages = async (req, res) => {
  try {
    const homeWorkPages = await HomeWorkPage.find();
    res.status(200).json(homeWorkPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Work pages",
      error,
    });
  }
};

// Get a single Home Work Page by ID
exports.getHomeWorkPageById = async (req, res) => {
  try {
    const homeWorkPage = await HomeWorkPage.findById(req.params.id);
    if (!homeWorkPage) {
      return res.status(404).json({ message: "Home Work page not found" });
    }
    res.status(200).json(homeWorkPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Work page",
      error,
    });
  }
};

// Update a Home Work Page by ID
exports.updateHomeWorkPageById = async (req, res) => {
  try {
    const updatedHomeWorkPage = await HomeWorkPage.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedHomeWorkPage) {
      return res.status(404).json({ message: "Home Work page not found" });
    }
    res.status(200).json(updatedHomeWorkPage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Home Work page",
      error,
    });
  }
};

// Delete a Home Work Page by ID
exports.deleteHomeWorkPageById = async (req, res) => {
  try {
    const deletedHomeWorkPage = await HomeWorkPage.findByIdAndDelete(
      req.params.id
    );
    if (!deletedHomeWorkPage) {
      return res.status(404).json({ message: "Home Work page not found" });
    }
    res.status(200).json({ message: "Home Work page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Home Work page",
      error,
    });
  }
};

// Add a new work section to Home Work Page
exports.addWorkSection = async (req, res) => {
  try {
    const { id } = req.params;
    const newSection = req.body;

    const updatedHomeWorkPage = await HomeWorkPage.findByIdAndUpdate(
      id,
      { $push: { home_work_section: newSection } },
      { new: true }
    );

    if (!updatedHomeWorkPage) {
      return res.status(404).json({ message: "Home Work page not found" });
    }

    res.status(200).json(updatedHomeWorkPage);
  } catch (error) {
    res.status(500).json({
      message: "Error adding new work section",
      error,
    });
  }
};

// Update a single work section by its ID
exports.updateWorkSection = async (req, res) => {
  try {
    const { id, sectionId } = req.params;
    const { inner_image, technology_use, back_image, detail, to } = req.body;

    const updatedHomeWorkPage = await HomeWorkPage.findOneAndUpdate(
      { _id: id, "home_work_section._id": sectionId },
      {
        $set: {
          "home_work_section.$.inner_image": inner_image,
          "home_work_section.$.technology_use": technology_use,
          "home_work_section.$.back_image": back_image,
          "home_work_section.$.detail": detail,
          "home_work_section.$.to": to,
        },
      },
      { new: true }
    );

    if (!updatedHomeWorkPage) {
      return res
        .status(404)
        .json({ message: "Work section or page not found" });
    }

    res.status(200).json(updatedHomeWorkPage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating work section",
      error,
    });
  }
};

// Delete a single work section by its ID
exports.deleteWorkSection = async (req, res) => {
  try {
    const { id, sectionId } = req.params;

    const updatedHomeWorkPage = await HomeWorkPage.findByIdAndUpdate(
      id,
      { $pull: { home_work_section: { _id: sectionId } } },
      { new: true }
    );

    if (!updatedHomeWorkPage) {
      return res
        .status(404)
        .json({ message: "Work section or page not found" });
    }

    res.status(200).json(updatedHomeWorkPage);
  } catch (error) {
    res.status(500).json({
      message: "Error deleting work section",
      error,
    });
  }
};
