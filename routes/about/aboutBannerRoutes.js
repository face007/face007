const express = require("express");
const router = express.Router();
const aboutBannerController = require("../../controller/about/aboutBannerController");

router.post("/about-banner", aboutBannerController.createAboutBanner);
router.get("/about-banners", aboutBannerController.getAllAboutBanners);
router.get("/about-banner/:id", aboutBannerController.getAboutBannerById);
router.put("/about-banner/:id", aboutBannerController.updateAboutBanner);
router.delete("/about-banner/:id", aboutBannerController.deleteAboutBanner);

module.exports = router;
