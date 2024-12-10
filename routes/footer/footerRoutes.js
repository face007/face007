const express = require("express");
const router = express.Router();
const footerController = require("../../controller/footer/footerController");

router.post("/footers", footerController.createFooter);
router.get("/footers", footerController.getAllFooters);
router.get("/footers/:footerId", footerController.getFooterById);
router.put("/footers/:footerId", footerController.updateFooter);

router.post("/footers/:footerId/quick-link", footerController.addQuickLink);
router.put(
  "/footers/:footerId/quick-link/:linkId",
  footerController.updateQuickLink
);
router.delete(
  "/footers/:footerId/quick-link/:linkId",
  footerController.deleteQuickLink
);

router.post(
  "/footers/:footerId/features-link",
  footerController.addFeaturesLink
);
router.put(
  "/footers/:footerId/features-link/:linkId",
  footerController.updateFeaturesLink
);
router.delete(
  "/footers/:footerId/features-link/:linkId",
  footerController.deleteFeaturesLink
);

router.post(
  "/footers/:footerId/services-link",
  footerController.addServicesLink
);
router.put(
  "/footers/:footerId/services-link/:linkId",
  footerController.updateServicesLink
);
router.delete(
  "/footers/:footerId/services-link/:linkId",
  footerController.deleteServicesLink
);

module.exports = router;
