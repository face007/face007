const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceCardSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    thumbnail_text: { type: String, required: true },
    details: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServiceCard", serviceCardSchema);
