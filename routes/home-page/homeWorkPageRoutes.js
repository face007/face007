const express = require('express');
const router = express.Router();
const homeWorkPageController = require('../../controller/home-page/homeWorkPageController');

// CRUD routes for HomeWorkPage
router.post('/home-work', homeWorkPageController.createHomeWorkPage);
router.get('/home-work', homeWorkPageController.getAllHomeWorkPages);
router.get('/home-work/:id', homeWorkPageController.getHomeWorkPageById);
router.put('/home-work/:id', homeWorkPageController.updateHomeWorkPageById);
router.delete('/home-work/:id', homeWorkPageController.deleteHomeWorkPageById);

// CRUD routes for home_work_section
router.post('/home-work/:id/work-section', homeWorkPageController.addWorkSection);
router.put('/home-work/:id/work-section/:sectionId', homeWorkPageController.updateWorkSection);
router.delete('/home-work/:id/work-section/:sectionId', homeWorkPageController.deleteWorkSection);

module.exports = router;
