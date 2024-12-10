const express = require("express");
const heroSectionController = require("../../controller/home-page/heroSectionHomePageController");

const router = express.Router();

router.post(
  "/home-hero-sections",
  heroSectionController.createHeroSectionHomePage
);
router.get(
  "/home-hero-sections",
  heroSectionController.getHeroSectionHomePages
);
router.get(
  "/home-hero-sections/:id",
  heroSectionController.getHeroSectionHomePageById
);
router.put(
  "/home-hero-sections/:id",
  heroSectionController.updateHeroSectionHomePage
);
router.delete(
  "/home-hero-sections/:id",
  heroSectionController.deleteHeroSectionHomePage
);

module.exports = router;
