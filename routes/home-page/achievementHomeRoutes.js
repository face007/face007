const express = require("express");
const router = express.Router();
const homeAchievementController = require("../../controller/home-page/achievementHomeController");

router.post(
  "/home-achievement",
  homeAchievementController.createHomeAchievementPage
);
router.get(
  "/home-achievement",
  homeAchievementController.getAllHomeAchievementPages
);
router.get(
  "/home-achievement/:id",
  homeAchievementController.getHomeAchievementPageById
);
router.put(
  "/home-achievement/:id",
  homeAchievementController.updateHomeAchievementPageById
);
router.delete(
  "/home-achievement/:id",
  homeAchievementController.deleteHomeAchievementPageById
);

module.exports = router;
