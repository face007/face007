const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quickLinkListSchema = new Schema({
  title: { type: String, required: true },
  to: { type: String, required: true },
});
const featuresLinkListSchema = new Schema({
  title: { type: String, required: true },
  to: { type: String, required: true },
});
const servicesLinkListSchema = new Schema({
  title: { type: String, required: true },
  to: { type: String, required: true },
});

const footerSchema = new Schema(
  {
    details: { type: String, required: true },
    image: { type: String, required: true },
    facebookLink: { type: String, required: true },
    linkedinLink: { type: String, required: true },
    whatsappLink: { type: String, required: true },
    quickLink: [quickLinkListSchema],
    featuresLink: [featuresLinkListSchema],
    servicesLink: [servicesLinkListSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Footer", footerSchema);
