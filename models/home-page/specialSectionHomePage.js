const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialSectionSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  detail: { type: String, required: true },
});

const specialSectionHomePageSchema = new Schema(
  {
    images: { type: String, required: true },
    title: { type: String, required: true },
    thumbnail_text: { type: String, required: true },
    details: { type: String, required: true },
    home_special_section: [specialSectionSchema], 
  },
  { timestamps: true }
);

module.exports = mongoose.model("SpecialSectionHomePage", specialSectionHomePageSchema);
