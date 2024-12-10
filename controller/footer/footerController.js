const Footer = require("../../models/footer/footer");

// Create new footer entry with links
exports.createFooter = async (req, res) => {
  try {
    const footer = new Footer(req.body);
    await footer.save();
    res.status(201).json(footer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all footers
exports.getAllFooters = async (req, res) => {
  try {
    const footers = await Footer.find();
    res.status(200).json(footers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get footer by ID
exports.getFooterById = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.footerId);
    if (footer) {
      res.status(200).json(footer);
    } else {
      res.status(404).json({ error: "Footer not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update footer data
exports.updateFooter = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.footerId);
    if (footer) {
      footer.details = req.body.details || footer.details;
      footer.image = req.body.image || footer.image;
      footer.facebookLink = req.body.facebookLink || footer.facebookLink;
      footer.linkedinLink = req.body.linkedinLink || footer.linkedinLink;
      footer.whatsappLink = req.body.whatsappLink || footer.whatsappLink;

      await footer.save();
      res.status(200).json(footer);
    } else {
      res.status(404).json({ error: "Footer not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add new Quick Link
exports.addQuickLink = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.footerId);
    footer.quickLink.push(req.body);
    await footer.save();
    res.status(200).json(footer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Quick Link
exports.updateQuickLink = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.footerId);
    const quickLink = footer.quickLink.id(req.params.linkId);
    if (quickLink) {
      quickLink.title = req.body.title || quickLink.title;
      quickLink.to = req.body.to || quickLink.to;
      await footer.save();
      res.status(200).json(footer);
    } else {
      res.status(404).json({ error: "Quick link not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Quick Link
exports.deleteQuickLink = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndUpdate(
      req.params.footerId,
      { $pull: { quickLink: { _id: req.params.linkId } } },
      { new: true }
    );
    if (footer) {
      res.status(200).json(footer);
    } else {
      res.status(404).json({ error: "Quick link not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Similar operations for Features Link
exports.addFeaturesLink = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.footerId);
    footer.featuresLink.push(req.body);
    await footer.save();
    res.status(200).json(footer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateFeaturesLink = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.footerId);
    const featuresLink = footer.featuresLink.id(req.params.linkId);
    if (featuresLink) {
      featuresLink.title = req.body.title || featuresLink.title;
      featuresLink.to = req.body.to || featuresLink.to;
      await footer.save();
      res.status(200).json(footer);
    } else {
      res.status(404).json({ error: "Features link not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Features Link
exports.deleteFeaturesLink = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndUpdate(
      req.params.footerId,
      { $pull: { featuresLink: { _id: req.params.linkId } } },
      { new: true }
    );
    if (footer) {
      res.status(200).json(footer);
    } else {
      res.status(404).json({ error: "Features link not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Similar operations for Services Link
exports.addServicesLink = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.footerId);
    footer.servicesLink.push(req.body);
    await footer.save();
    res.status(200).json(footer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateServicesLink = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.footerId);
    const servicesLink = footer.servicesLink.id(req.params.linkId);
    if (servicesLink) {
      servicesLink.title = req.body.title || servicesLink.title;
      servicesLink.to = req.body.to || servicesLink.to;
      await footer.save();
      res.status(200).json(footer);
    } else {
      res.status(404).json({ error: "Services link not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Services Link
exports.deleteServicesLink = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndUpdate(
      req.params.footerId,
      { $pull: { servicesLink: { _id: req.params.linkId } } },
      { new: true }
    );
    if (footer) {
      res.status(200).json(footer);
    } else {
      res.status(404).json({ error: "Services link not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
