const express = require("express");
const router = express.Router();
const aboutReviewController = require("../../controller/about/aboutReviewController");

router.post("/about-review", aboutReviewController.createAboutReview);
router.get("/about-review", aboutReviewController.getAllAboutReviews);
router.get("/about-review/:id", aboutReviewController.getAboutReviewById);
router.put("/about-review/:id", aboutReviewController.updateAboutReview);
router.delete("/about-review/:id", aboutReviewController.deleteAboutReview);

module.exports = router;
