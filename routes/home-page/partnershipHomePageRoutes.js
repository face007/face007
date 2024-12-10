const express = require("express");
const partnershipController = require("../../controller/home-page/partnershipHomePageController");

const router = express.Router();

router.post(
  "/home-partnership",
  partnershipController.createPartnershipHomePage
);
router.get("/home-partnership", partnershipController.getPartnershipHomePages);
router.get(
  "/home-partnership/:id",
  partnershipController.getPartnershipHomePageById
);
router.put(
  "/home-partnership/:id",
  partnershipController.updatePartnershipHomePage
);
router.delete(
  "/home-partnership/:id",
  partnershipController.deletePartnershipHomePage
);

module.exports = router;
