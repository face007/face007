const ServiceHomePage = require("../../models/home-page/serviceHomePage");

// Create a new Service Section for the Home Page
exports.createServiceHomePage = async (req, res) => {
  try {
    const newService = new ServiceHomePage(req.body);
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({
      message: "Error creating Service for Home Page",
      error,
    });
  }
};

// Get all Service Sections for the Home Page
exports.getServiceHomePages = async (req, res) => {
  try {
    const services = await ServiceHomePage.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Services for Home Page",
      error,
    });
  }
};

// Get a single Service Section by ID
exports.getServiceHomePageById = async (req, res) => {
  try {
    const service = await ServiceHomePage.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Service for Home Page",
      error,
    });
  }
};

// Update a Service Section by ID
exports.updateServiceHomePage = async (req, res) => {
  try {
    const updatedService = await ServiceHomePage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Service for Home Page",
      error,
    });
  }
};

// Delete a Service Section by ID
exports.deleteServiceHomePage = async (req, res) => {
  try {
    const deletedService = await ServiceHomePage.findByIdAndDelete(
      req.params.id
    );
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Service for Home Page",
      error,
    });
  }
};
