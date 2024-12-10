const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeAboutUsPageSchema = new Schema(
  {
    images: { type: String, required: true },
    title: { type: String, required: true },
    thumbnail_text: { type: String, required: true },
    details_one: { type: String, required: true },
    details_two: { type: String, required: true },
    button_text: { type: String, required: true },
    button_to: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomeAboutUsPage", homeAboutUsPageSchema);
