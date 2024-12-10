const MissionVisionValues = require("../../models/about/aboutMissionVision");

// Create a new MissionVisionValues
exports.createMissionVisionValues = async (req, res) => {
  try {
    const missionVisionValues = new MissionVisionValues(req.body);
    await missionVisionValues.save();
    res.status(201).json({
      message: "MissionVisionValues created successfully!",
      missionVisionValues,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating MissionVisionValues", error });
  }
};

// Get all MissionVisionValues entries
exports.getAllMissionVisionValues = async (req, res) => {
  try {
    const missionVisionValuesEntries = await MissionVisionValues.find();
    res.status(200).json(missionVisionValuesEntries);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching MissionVisionValues entries", error });
  }
};

// Get a single MissionVisionValues by ID
exports.getMissionVisionValuesById = async (req, res) => {
  try {
    const missionVisionValues = await MissionVisionValues.findById(
      req.params.id
    );
    if (!missionVisionValues) {
      return res.status(404).json({ message: "MissionVisionValues not found" });
    }
    res.status(200).json(missionVisionValues);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching MissionVisionValues", error });
  }
};

// Update a MissionVisionValues by ID
exports.updateMissionVisionValues = async (req, res) => {
  try {
    const missionVisionValues = await MissionVisionValues.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!missionVisionValues) {
      return res.status(404).json({ message: "MissionVisionValues not found" });
    }
    res.status(200).json({
      message: "MissionVisionValues updated successfully!",
      missionVisionValues,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating MissionVisionValues", error });
  }
};

// Delete a MissionVisionValues by ID
exports.deleteMissionVisionValues = async (req, res) => {
  try {
    const missionVisionValues = await MissionVisionValues.findByIdAndDelete(
      req.params.id
    );
    if (!missionVisionValues) {
      return res.status(404).json({ message: "MissionVisionValues not found" });
    }
    res
      .status(200)
      .json({ message: "MissionVisionValues deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting MissionVisionValues", error });
  }
};

// Add a description to a specific missionVisionSchema entry
exports.addDescriptionToMissionVisionValue = async (req, res) => {
  const { id, valueIndex } = req.params;
  const { description } = req.body;

  try {
    const missionVisionValues = await MissionVisionValues.findById(id);
    if (!missionVisionValues) {
      return res.status(404).json({ message: "MissionVisionValues not found" });
    }

    if (
      valueIndex < 0 ||
      valueIndex >= missionVisionValues.missionVisionValues.length
    ) {
      return res
        .status(400)
        .json({ message: "Invalid index for missionVisionValues" });
    }
    missionVisionValues.missionVisionValues[valueIndex].description.push(
      description
    );
    await missionVisionValues.save();
    res
      .status(200)
      .json({
        message: "Description added successfully!",
        missionVisionValues,
      });
  } catch (error) {
    res.status(400).json({ message: "Error adding description", error });
  }
};

// Update a specific description in a missionVisionSchema entry by ID and indices
exports.updateDescriptionInMissionVisionValue = async (req, res) => {
  const { id, valueIndex, descriptionIndex } = req.params;
  const { description } = req.body;

  try {
    const missionVisionValues = await MissionVisionValues.findById(id);
    if (!missionVisionValues) {
      return res.status(404).json({ message: "MissionVisionValues not found" });
    }
    if (
      valueIndex < 0 ||
      valueIndex >= missionVisionValues.missionVisionValues.length
    ) {
      return res
        .status(400)
        .json({ message: "Invalid index for missionVisionValues" });
    }
    if (
      descriptionIndex < 0 ||
      descriptionIndex >=
        missionVisionValues.missionVisionValues[valueIndex].description.length
    ) {
      return res.status(400).json({ message: "Invalid index for description" });
    }
    missionVisionValues.missionVisionValues[valueIndex].description[
      descriptionIndex
    ] = description;
    await missionVisionValues.save();
    res
      .status(200)
      .json({
        message: "Description updated successfully!",
        missionVisionValues,
      });
  } catch (error) {
    res.status(400).json({ message: "Error updating description", error });
  }
};

// Delete a specific description from a missionVisionSchema entry by ID and indices
exports.deleteDescriptionInMissionVisionValue = async (req, res) => {
  const { id, valueIndex, descriptionIndex } = req.params;
  try {
    const missionVisionValues = await MissionVisionValues.findById(id);
    if (!missionVisionValues) {
      return res.status(404).json({ message: "MissionVisionValues not found" });
    }
    if (
      valueIndex < 0 ||
      valueIndex >= missionVisionValues.missionVisionValues.length
    ) {
      return res
        .status(400)
        .json({ message: "Invalid index for missionVisionValues" });
    }
    if (
      descriptionIndex < 0 ||
      descriptionIndex >=
        missionVisionValues.missionVisionValues[valueIndex].description.length
    ) {
      return res.status(400).json({ message: "Invalid index for description" });
    }
    missionVisionValues.missionVisionValues[valueIndex].description.splice(
      descriptionIndex,
      1
    );

    await missionVisionValues.save();
    res
      .status(200)
      .json({
        message: "Description deleted successfully!",
        missionVisionValues,
      });
  } catch (error) {
    res.status(400).json({ message: "Error deleting description", error });
  }
};
