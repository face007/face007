const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactPageSchema = new Schema(
  {
    title: { type: String, required: true },
    details: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    contactUs: { type: String, required: true },
    contact: { type: String, required: true },
    facebookLink: { type: String, required: true },
    twitterLink: { type: String, required: true },
    instagramLink: { type: String, required: true },
    linkedinLink: { type: String, required: true },
    whatsappLink: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactPage", contactPageSchema);
