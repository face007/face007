const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroSectionHomePageSchema = new Schema(
  {
    thumbnail_one: { type: String, required: true },
    thumbnail_two: { type: String, required: true },
    card_one_img: { type: String, required: true },
    card_one_heading: { type: String, required: true },
    card_one_details: { type: String, required: true },
    card_two_img: { type: String, required: true },
    card_two_heading: { type: String, required: true },
    card_two_details: { type: String, required: true },
    card_three_img: { type: String, required: true },
    card_three_heading: { type: String, required: true },
    card_three_details: { type: String, required: true },
    hero_section_img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "HeroSectionHomePage",
  heroSectionHomePageSchema
);
