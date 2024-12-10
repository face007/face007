const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutExperienceSchema = new Schema(
  {
    year: { type: String, required: true },
    yearsOfExperience: { type: String, required: true },
    foa: { type: String, required: true },
    immerseYourself: { type: String, required: true },
    experience: { type: String, required: true },
    leftDetails: { type: String, required: true },
    rightTitle1: { type: String, required: true },
    rightTitle2: { type: String, required: true },
    rightTitle3: { type: String, required: true },
    thumbnail1: { type: String, required: true },
    thumbnail2: { type: String, required: true },
    thumbnail3: { type: String, required: true },
    rightDetails1: { type: String, required: true },
    rightDetails2: { type: String, required: true },
    rightDetails3: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutExperience", aboutExperienceSchema);
