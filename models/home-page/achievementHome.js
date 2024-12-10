const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeAchievementPageSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail_text: { type: String, required: true },
    details: { type: String, required: true },
    team_member_text: { type: String, required: true },
    team_member_count: { type: Number, required: true },
    award_winner_text: { type: String, required: true },
    award_winner_count: { type: Number, required: true },
    works_done_text: { type: String, required: true },
    works_done_count: { type: Number, required: true },
    satisfied_clients_text: { type: String, required: true },
    satisfied_clients_count: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "HomeAchievementPage",
  homeAchievementPageSchema
);
