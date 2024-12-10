const express = require("express");
const router = express.Router();
const aboutExperienceController = require("../../controller/about/aboutExperienceController");

router.post("/about-experience", aboutExperienceController.createAboutExperience);
router.get("/about-experience", aboutExperienceController.getAllAboutExperiences);
router.get("/about-experience/:id", aboutExperienceController.getAboutExperienceById);
router.put("/about-experience/:id", aboutExperienceController.updateAboutExperience);
router.delete("/about-experience/:id", aboutExperienceController.deleteAboutExperience);

module.exports = router;
