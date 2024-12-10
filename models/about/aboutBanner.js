const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutBannerSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnailText: { type: String, required: true },
    para: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonTo: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutBanner", aboutBannerSchema);
