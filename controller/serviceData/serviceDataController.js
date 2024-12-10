const ServiceCard = require('../../models/serviceData/serviceData'); 

// Create a new service card
exports.createServiceCard = async (req, res) => {
    try {
      const newServiceCard = new ServiceCard(req.body); 
      await newServiceCard.save();
      res.status(201).json(newServiceCard);
    } catch (error) {
      res.status(500).json({
        message: "Error creating service card",
        error,
      });
    }
  };
  

// Get all service cards
exports.getAllServiceCards = async (req, res) => {
  try {
    const serviceCards = await ServiceCard.find();
    res.status(200).json(serviceCards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching service cards', error });
  }
};

// Get a single service card by ID
exports.getServiceCardById = async (req, res) => {
  try {
    const serviceCard = await ServiceCard.findById(req.params.id);
    if (!serviceCard) {
      return res.status(404).json({ message: 'Service card not found' });
    }
    res.status(200).json(serviceCard);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching service card', error });
  }
};

// Update a service card by ID
exports.updateServiceCardById = async (req, res) => {
  try {
    const updatedServiceCard = await ServiceCard.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedServiceCard) {
      return res.status(404).json({ message: 'Service card not found' });
    }
    res.status(200).json(updatedServiceCard);
  } catch (error) {
    res.status(500).json({ message: 'Error updating service card', error });
  }
};

// Delete a service card by ID
exports.deleteServiceCardById = async (req, res) => {
  try {
    const deletedServiceCard = await ServiceCard.findByIdAndDelete(req.params.id);
    if (!deletedServiceCard) {
      return res.status(404).json({ message: 'Service card not found' });
    }
    res.status(200).json({ message: 'Service card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service card', error });
  }
};
