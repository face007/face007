const HomeGetInTouch = require("../../models/home-page/HomeGetInTouch");

// Create a new HomeGetInTouch
exports.createHomeGetInTouch = async (req, res) => {
  try {
    const { title, thumbnail_text, details, home_get_in_touch } = req.body;

    const newHomeGetInTouch = new HomeGetInTouch({
      title,
      thumbnail_text,
      details,
      home_get_in_touch,
    });

    const savedHomeGetInTouch = await newHomeGetInTouch.save();
    res.status(201).json(savedHomeGetInTouch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all HomeGetInTouch entries
exports.getAllHomeGetInTouch = async (req, res) => {
  try {
    const homeGetInTouchEntries = await HomeGetInTouch.find();
    res.status(200).json(homeGetInTouchEntries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single HomeGetInTouch entry by ID
exports.getHomeGetInTouchById = async (req, res) => {
  try {
    const homeGetInTouch = await HomeGetInTouch.findById(req.params.id);
    if (!homeGetInTouch) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.status(200).json(homeGetInTouch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a HomeGetInTouch entry
exports.updateHomeGetInTouch = async (req, res) => {
  try {
    const { title, thumbnail_text, details, home_get_in_touch } = req.body;

    const updatedHomeGetInTouch = await HomeGetInTouch.findByIdAndUpdate(
      req.params.id,
      { title, thumbnail_text, details, home_get_in_touch },
      { new: true, runValidators: true }
    );

    if (!updatedHomeGetInTouch) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(200).json(updatedHomeGetInTouch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a HomeGetInTouch entry
exports.deleteHomeGetInTouch = async (req, res) => {
  try {
    const deletedHomeGetInTouch = await HomeGetInTouch.findByIdAndDelete(
      req.params.id
    );

    if (!deletedHomeGetInTouch) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a single 'home_get_in_touch' sub-document
exports.updateHomeGetInTouchItem = async (req, res) => {
  const { id, itemId } = req.params;
  const { image, title, detail } = req.body;

  try {
    // Find the HomeGetInTouch entry by ID
    const homeGetInTouch = await HomeGetInTouch.findById(id);
    if (!homeGetInTouch) {
      return res.status(404).json({ message: "HomeGetInTouch not found" });
    }

    // Find the specific item in the home_get_in_touch array
    const itemIndex = homeGetInTouch.home_get_in_touch.findIndex(
      (item) => item._id.toString() === itemId
    );
    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Update the item
    homeGetInTouch.home_get_in_touch[itemIndex] = { image, title, detail };

    // Save the updated HomeGetInTouch entry
    await homeGetInTouch.save();

    return res.status(200).json(homeGetInTouch);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating item", error: error.message });
  }
};

// Delete a single 'home_get_in_touch' sub-document
exports.deleteHomeGetInTouchItem = async (req, res) => {
  try {
    const { homeGetInTouchId, homeGetInTouchItemId } = req.params;

    // Find the document by ID and remove the specific sub-document
    const updatedHomeGetInTouch = await HomeGetInTouch.findByIdAndUpdate(
      homeGetInTouchId,
      {
        $pull: { home_get_in_touch: { _id: homeGetInTouchItemId } },
      },
      { new: true }
    );

    if (!updatedHomeGetInTouch) {
      return res
        .status(404)
        .json({ message: "Item not found or already deleted" });
    }

    res
      .status(200)
      .json({ message: "Item deleted successfully", updatedHomeGetInTouch });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
