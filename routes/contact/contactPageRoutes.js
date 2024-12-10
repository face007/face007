const express = require("express");
const router = express.Router();
const contactPageController = require("../../controller/contact/contactPageController");

router.post("/contact-page", contactPageController.createContactPage);
router.get("/contact-page", contactPageController.getAllContactPages);
router.get("/contact-page/:id", contactPageController.getContactPageById);
router.put("/contact-page/:id", contactPageController.updateContactPageById);
router.delete("/contact-page/:id", contactPageController.deleteContactPageById);

module.exports = router;
