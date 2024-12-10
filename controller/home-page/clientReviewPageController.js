const ClientReviewPage = require("../../models/home-page/clientReviewPage");

// Create a new Client Review Page entry
exports.createClientReviewPage = async (req, res) => {
  try {
    const newClientReviewPage = new ClientReviewPage(req.body);
    await newClientReviewPage.save();
    res.status(201).json(newClientReviewPage);
  } catch (error) {
    res.status(500).json({
      message: "Error creating Client Review page",
      error,
    });
  }
};

// Get all Client Review Page entries
exports.getAllClientReviewPages = async (req, res) => {
  try {
    const clientReviewPages = await ClientReviewPage.find();
    res.status(200).json(clientReviewPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Client Review pages",
      error,
    });
  }
};

// Get a single Client Review Page by ID
exports.getClientReviewPageById = async (req, res) => {
  try {
    const clientReviewPage = await ClientReviewPage.findById(req.params.id);
    if (!clientReviewPage) {
      return res.status(404).json({ message: "Client Review page not found" });
    }
    res.status(200).json(clientReviewPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Client Review page",
      error,
    });
  }
};

// Update a Client Review Page by ID
exports.updateClientReviewPageById = async (req, res) => {
  try {
    const updatedClientReviewPage = await ClientReviewPage.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedClientReviewPage) {
      return res.status(404).json({ message: "Client Review page not found" });
    }
    res.status(200).json(updatedClientReviewPage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Client Review page",
      error,
    });
  }
};

// Delete a Client Review Page by ID
exports.deleteClientReviewPageById = async (req, res) => {
  try {
    const deletedClientReviewPage = await ClientReviewPage.findByIdAndDelete(req.params.id);
    if (!deletedClientReviewPage) {
      return res.status(404).json({ message: "Client Review page not found" });
    }
    res.status(200).json({ message: "Client Review page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Client Review page",
      error,
    });
  }
};

// Add a new user review to Client Review Page
exports.addUserReview = async (req, res) => {
  try {
    const { id } = req.params;
    const newUserReview = req.body;

    const updatedClientReviewPage = await ClientReviewPage.findByIdAndUpdate(
      id,
      { $push: { users: newUserReview } },
      { new: true }
    );

    if (!updatedClientReviewPage) {
      return res.status(404).json({ message: "Client Review page not found" });
    }

    res.status(200).json(updatedClientReviewPage);
  } catch (error) {
    res.status(500).json({
      message: "Error adding new user review",
      error,
    });
  }
};

// Update a single user review by its ID
exports.updateUserReview = async (req, res) => {
  try {
    const { id, userId } = req.params;
    const { name, designation, company, rating, textReview, picture } = req.body;

    const updatedClientReviewPage = await ClientReviewPage.findOneAndUpdate(
      { _id: id, "users._id": userId },
      {
        $set: {
          "users.$.name": name,
          "users.$.designation": designation,
          "users.$.company": company,
          "users.$.rating": rating,
          "users.$.textReview": textReview,
          "users.$.picture": picture,
        },
      },
      { new: true }
    );

    if (!updatedClientReviewPage) {
      return res.status(404).json({ message: "User review or page not found" });
    }

    res.status(200).json(updatedClientReviewPage);
  } catch (error) {
    res.status(500).json({
      message: "Error updating user review",
      error,
    });
  }
};

// Delete a single user review by its ID
exports.deleteUserReview = async (req, res) => {
  try {
    const { id, userId } = req.params;

    const updatedClientReviewPage = await ClientReviewPage.findByIdAndUpdate(
      id,
      { $pull: { users: { _id: userId } } },
      { new: true }
    );

    if (!updatedClientReviewPage) {
      return res.status(404).json({ message: "User review or page not found" });
    }

    res.status(200).json(updatedClientReviewPage);
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user review",
      error,
    });
  }
};
