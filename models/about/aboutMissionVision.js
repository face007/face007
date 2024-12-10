const mongoose = require("mongoose");

const missionVisionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  description: { type: [String], required: true },
});

const mainContentSchema = new mongoose.Schema({
  missionVision: { type: String, required: true },
  companyName: { type: String, required: true },
  path: { type: String, required: true },
  img: { type: String, required: true },
  missionVisionValues: { type: [missionVisionSchema], required: true },
});

module.exports = mongoose.model("MainContent", mainContentSchema);
