const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeWorkSectionSchema = new Schema({
  inner_image: { type: String, required: true },
  technology_use: { type: String, required: true },
  back_image: { type: String, required: true },
  detail: { type: String, required: true },
  to: { type: String, required: true },
});

const homeWorkPageSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail_text: { type: String, required: true },
    details: { type: String, required: true },
    home_work_section: [homeWorkSectionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomeWorkPage", homeWorkPageSchema);
