//imports
const express = require('express');
const router = express.Router();
const VehicleController = require('../controller/vehicle.controller');


module.exports = ()=>{
    
/** insert a Vehicle. */
router.post('/', VehicleController.createVehicle);

/** get all Vehicles. */
router.get('/', VehicleController.getAllVehicles);

/** get Vehicles for Categories. */
router.get('/:id', VehicleController.getVehiclesForCategory);

/** get Vehicles for Categories. */
router.put('/:id', VehicleController.editVehicle);

/** delete a Vehicle. */
router.delete('/:id', VehicleController.deleteVehicle);

/** get all calculated value. */
router.post('/cost', VehicleController.calculateTripCharges);

return router;

}

