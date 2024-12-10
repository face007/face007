const HomeAchievementPage = require('../../models/home-page/achievementHome'); 

// Create a new Home Achievement Page entry
exports.createHomeAchievementPage = async (req, res) => {
  try {
    const newHomeAchievementPage = new HomeAchievementPage(req.body);
    await newHomeAchievementPage.save();
    res.status(201).json(newHomeAchievementPage);
  } catch (error) {
    res.status(500).json({
      message: "Error creating Home Achievement page",
      error,
    });
  }
};

// Get all Home Achievement Page entries
exports.getAllHomeAchievementPages = async (req, res) => {
  try {
    const homeAchievementPages = await HomeAchievementPage.find();
    res.status(200).json(homeAchievementPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Achievement pages",
      error,
    });
  }
};

// Get a single Home Achievement Page by ID
exports.getHomeAchievementPageById = async (req, res) => {
  try {
    const homeAchievementPage = await HomeAchievementPage.findById(req.params.id);
    if (!homeAchievementPage) {
      return res.status(404).json({ message: 'Home Achievement page not found' });
    }
    res.status(200).json(homeAchievementPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Achievement page",
      error,
    });
  }
};

// Update a Home Achievement Page by ID
exports.updateHomeAchievementPageById = async (req, res) => {
  try {
    const updatedHomeAchievementPage = await HomeAchievementPage.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedHomeAchievementPage) {
      return res.status(404).json({ message: 'Home Achievement page not found' });
    }
    res.status(200).json(updatedHomeAchievementPage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Home Achievement page",
      error,
    });
  }
};

// Delete a Home Achievement Page by ID
exports.deleteHomeAchievementPageById = async (req, res) => {
  try {
    const deletedHomeAchievementPage = await HomeAchievementPage.findByIdAndDelete(req.params.id);
    if (!deletedHomeAchievementPage) {
      return res.status(404).json({ message: 'Home Achievement page not found' });
    }
    res.status(200).json({ message: 'Home Achievement page deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Home Achievement page",
      error,
    });
  }
};
