const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutReviewSchema = new Schema(
  {
    para: { type: String, required: true },
    name: { type: String, required: true },
    coa: { type: String, required: true },
    reviewImg: { type: String, required: true },
    profileIcon: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutReview", aboutReviewSchema);
