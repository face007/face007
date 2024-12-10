const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userReviewSchema = new Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  company: { type: String, required: true },
  rating: { type: Number, required: true },
  textReview: { type: String, required: true },
  picture: { type: String, required: true },
});

const clientReviewPageSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail_text: { type: String, required: true },
    details: { type: String, required: true },
    users: [userReviewSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClientReviewPage", clientReviewPageSchema);
