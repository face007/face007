const express = require("express");
const router = express.Router();
const aboutMissionVisionController = require("../../controller/about/aboutMissionVisionController");

router.post(
  "/about-mission-vision",
  aboutMissionVisionController.createMissionVisionValues
);

router.get(
  "/about-mission-vision",
  aboutMissionVisionController.getAllMissionVisionValues
);

router.get(
  "/about-mission-vision/:id",
  aboutMissionVisionController.getMissionVisionValuesById
);

router.put(
  "/about-mission-vision/:id",
  aboutMissionVisionController.updateMissionVisionValues
);

router.delete(
  "/about-mission-vision/:id",
  aboutMissionVisionController.deleteMissionVisionValues
);

router.post(
  "/about-mission-vision/:id/values/:valueIndex/description",
  aboutMissionVisionController.addDescriptionToMissionVisionValue
);

router.put(
  "/about-mission-vision/:id/values/:valueIndex/description/:descriptionIndex",
  aboutMissionVisionController.updateDescriptionInMissionVisionValue
);

router.delete(
  "/about-mission-vision/:id/values/:valueIndex/description/:descriptionIndex",
  aboutMissionVisionController.deleteDescriptionInMissionVisionValue
);

module.exports = router;
