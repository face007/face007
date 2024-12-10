const ContactPage = require("../../models/contact/contactPage");

// Create a new Contact Page entry
exports.createContactPage = async (req, res) => {
  try {
    const newContactPage = new ContactPage(req.body);
    await newContactPage.save();
    res.status(201).json(newContactPage);
  } catch (error) {
    res.status(500).json({
      message: "Error creating Contact Page",
      error,
    });
  }
};

// Get all Contact Page entries
exports.getAllContactPages = async (req, res) => {
  try {
    const contactPages = await ContactPage.find();
    res.status(200).json(contactPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Contact Pages",
      error,
    });
  }
};

// Get a single Contact Page by ID
exports.getContactPageById = async (req, res) => {
  try {
    const contactPage = await ContactPage.findById(req.params.id);
    if (!contactPage) {
      return res.status(404).json({ message: "Contact Page not found" });
    }
    res.status(200).json(contactPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Contact Page",
      error,
    });
  }
};

// Update a Contact Page by ID
exports.updateContactPageById = async (req, res) => {
  try {
    const updatedContactPage = await ContactPage.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedContactPage) {
      return res.status(404).json({ message: "Contact Page not found" });
    }
    res.status(200).json(updatedContactPage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Contact Page",
      error,
    });
  }
};

// Delete a Contact Page by ID
exports.deleteContactPageById = async (req, res) => {
  try {
    const deletedContactPage = await ContactPage.findByIdAndDelete(req.params.id);
    if (!deletedContactPage) {
      return res.status(404).json({ message: "Contact Page not found" });
    }
    res.status(200).json({ message: "Contact Page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Contact Page",
      error,
    });
  }
};
