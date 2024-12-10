const express = require('express');
const router = express.Router();
const productController = require('../../controller/products/productsController');

router.post('/products', productController.createProduct); 
router.get('/products', productController.getAllProducts); 
router.get('/products/:id', productController.getProductById); 
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct); 


router.post('/products/:id/carousel', productController.addCarouselImage);
router.delete('/products/:id/carousel/:imageId', productController.deleteCarouselImage); 

module.exports = router;
