const express = require("express");
const router = express.Router();
const specialSectionHomePageController = require("../../controller/home-page/specialSectionHomePageController");

router.post(
  "/home-special-section",
  specialSectionHomePageController.createSpecialSectionHomePage
);
router.get(
  "/home-special-section",
  specialSectionHomePageController.getAllSpecialSectionHomePages
);
router.get(
  "/home-special-section/:id",
  specialSectionHomePageController.getSpecialSectionHomePageById
);
router.put(
  "/home-special-section/:id",
  specialSectionHomePageController.updateSpecialSectionHomePageById
);
router.delete(
  "/home-special-section/:id",
  specialSectionHomePageController.deleteSpecialSectionHomePageById
);

router.post(
  "/home-special-section/:id/special-section",
  specialSectionHomePageController.addSpecialSection
);
router.put(
  "/home-special-section/:id/special-section/:sectionId",
  specialSectionHomePageController.updateSpecialSection
);
router.delete(
  "/home-special-section/:id/special-section/:sectionId",
  specialSectionHomePageController.deleteSpecialSection
);

module.exports = router;
