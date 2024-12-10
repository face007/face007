const express = require("express");
const router = express.Router();
const homeGetInTouchController = require("../../controller/home-page/HomeGetInTouchController");

router.post(
  "/home-get-in-touch",
  homeGetInTouchController.createHomeGetInTouch
);
router.get("/home-get-in-touch", homeGetInTouchController.getAllHomeGetInTouch);
router.get(
  "/home-get-in-touch/:id",
  homeGetInTouchController.getHomeGetInTouchById
);
router.put(
  "/home-get-in-touch/:id",
  homeGetInTouchController.updateHomeGetInTouch
);
router.delete(
  "/home-get-in-touch/:id",
  homeGetInTouchController.deleteHomeGetInTouch
);

router.put(
  "/home-get-in-touch/:id/item/:itemId",
  homeGetInTouchController.updateHomeGetInTouchItem
);
router.delete(
  "/home-get-in-touch/:homeGetInTouchId/item/:homeGetInTouchItemId",
  homeGetInTouchController.deleteHomeGetInTouchItem
);

module.exports = router;
