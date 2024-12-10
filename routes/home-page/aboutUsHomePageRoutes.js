const express = require("express");
const router = express.Router();
const homeAboutUsPageController = require("../../controller/home-page/aboutUsHomePageController");

router.post("/home-about-us", homeAboutUsPageController.createHomeAboutUsPage);
router.get("/home-about-us", homeAboutUsPageController.getAllHomeAboutUsPages);
router.get(
  "/home-about-us/:id",
  homeAboutUsPageController.getHomeAboutUsPageById
);
router.put(
  "/home-about-us/:id",
  homeAboutUsPageController.updateHomeAboutUsPageById
);
router.delete(
  "/home-about-us/:id",
  homeAboutUsPageController.deleteHomeAboutUsPageById
);

module.exports = router;

