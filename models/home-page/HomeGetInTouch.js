const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const home_get_in_touch_Schema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  detail: { type: String, required: true },
});

const homeGetInTouchSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail_text: { type: String, required: true },
    details: { type: String, required: true },
    home_get_in_touch: [home_get_in_touch_Schema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomeGetInTouch", homeGetInTouchSchema);
