const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutKnowMoreSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnailText: { type: String, required: true },
    innovative: { type: String, required: true },
    innovativeText: { type: String, required: true },
    commitment: { type: String, required: true },
    commitmentText: { type: String, required: true },
    meticulously: { type: String, required: true },
    meticulouslyText: { type: String, required: true },
    iconOne: { type: String, required: true },
    iconTwo: { type: String, required: true },
    iconThree: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutKnowMore", aboutKnowMoreSchema);
