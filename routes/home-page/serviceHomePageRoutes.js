const express = require("express");
const serviceHomePageController = require("../../controller/home-page/serviceHomePageController");

const router = express.Router();

router.post("/service-home", serviceHomePageController.createServiceHomePage);
router.get("/service-home", serviceHomePageController.getServiceHomePages);
router.get(
  "/service-home/:id",
  serviceHomePageController.getServiceHomePageById
);
router.put(
  "/service-home/:id",
  serviceHomePageController.updateServiceHomePage
);
router.delete(
  "/service-home/:id",
  serviceHomePageController.deleteServiceHomePage
);

module.exports = router;
