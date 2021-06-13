//imports
const express = require('express');
const router = express.Router();
const CategoryController = require('../controller/category.controller');


module.exports = ()=>{
    
/** insert a Category. */
router.post('/', CategoryController.createCategory);

/** get all Categories. */
router.get('/', CategoryController.getAllCategories);

/** get all vehicles of particular Category. */
router.get('/:id', CategoryController.getVehiclesForCategory);

/** delete a Category. */
router.delete('/:id', CategoryController.deleteCategory);

/** get all Categories. */
router.get('/cost/:id', CategoryController.calculateTripCharges);

return router;

}

