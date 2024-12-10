const express = require("express");
const router = express.Router();
const contactController = require("../../controller/contact/contactController");

router.post("/contacts", contactController.createContact);
router.get("/contacts", contactController.getAllContacts);
router.get("/contacts/:id", contactController.getContactById);
router.put("/contacts/:id", contactController.updateContactById);
router.delete("/contacts/:id", contactController.deleteContactById);

module.exports = router;
