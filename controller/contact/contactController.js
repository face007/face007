const Contact = require("../../models/contact/contact");

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({
      message: "Error creating contact message",
      error,
    });
  }
};

// Get all contact messages
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching contact messages",
      error,
    });
  }
};

// Get a single contact message by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact message not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching contact message",
      error,
    });
  }
};

// Update a contact message by ID
exports.updateContactById = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true } // Return the updated document and validate
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact message not found" });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({
      message: "Error updating contact message",
      error,
    });
  }
};

// Delete a contact message by ID
exports.deleteContactById = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact message not found" });
    }
    res.status(200).json({ message: "Contact message deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting contact message",
      error,
    });
  }
};
