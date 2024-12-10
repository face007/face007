const express = require("express");
const router = express.Router();
const aboutKnowMoreController = require("../../controller/about/aboutKnowMoreController");

router.post("/about-know-more", aboutKnowMoreController.createAboutKnowMore);
router.get("/about-know-more", aboutKnowMoreController.getAllAboutKnowMore);
router.get(
  "/about-know-more/:id",
  aboutKnowMoreController.getAboutKnowMoreById
);
router.put("/about-know-more/:id", aboutKnowMoreController.updateAboutKnowMore);
router.delete(
  "/about-know-more/:id",
  aboutKnowMoreController.deleteAboutKnowMore
);

module.exports = router;
