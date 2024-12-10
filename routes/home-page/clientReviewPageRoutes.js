const express = require("express");
const router = express.Router();
const userReviewController = require("../../controller/home-page/clientReviewPageController");

router.post("/reviews", userReviewController.createClientReviewPage);
router.get("/reviews", userReviewController.getAllClientReviewPages);
router.get("/reviews/:id", userReviewController.getClientReviewPageById);
router.put("/reviews/:id", userReviewController.updateClientReviewPageById);
router.delete("/reviews/:id", userReviewController.deleteClientReviewPageById);

router.post("/reviews/:id/users", userReviewController.addUserReview);
router.put("/reviews/:id/users/:userId", userReviewController.updateUserReview);
router.delete(
  "/reviews/:id/users/:userId",
  userReviewController.deleteUserReview
);

module.exports = router;
