const express = require("express");
const router = express.Router();
const serviceCardController = require("../../controller/serviceData/serviceDataController");

router.post("/service-cards", serviceCardController.createServiceCard);
router.get("/service-cards", serviceCardController.getAllServiceCards);
router.get("/service-cards/:id", serviceCardController.getServiceCardById);
router.put("/service-cards/:id", serviceCardController.updateServiceCardById);
router.delete(
  "/service-cards/:id",
  serviceCardController.deleteServiceCardById
);

module.exports = router;
