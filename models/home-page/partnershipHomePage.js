const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnershipHomePageSchema = new Schema(
  {
    partner_logo: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "PartnershipHomePage",
  partnershipHomePageSchema
);
