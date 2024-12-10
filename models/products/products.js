const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carouselImgsSchema = new Schema({
  img: { type: String, required: true },
});

const productSchema = new Schema(
  {
    alignment: { type: String, enum: ["left", "right"]},
    img: { type: String, required: true },
    title: { type: String, required: true },
    detailText_one: { type: String, required: true },
    detailText_two: { type: String, required: true },
    carouselImg: [carouselImgsSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
