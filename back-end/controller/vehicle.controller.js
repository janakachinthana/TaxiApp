//Create object
const Vehicle = require('../models/vehicle.model');

//insert to the database
const createVehicle = async (req, res) => {
    //to prevent crashes
    if (req.body) {
        const vehicle = new Vehicle(req.body);
        vehicle.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Retrieve all data related to the model
const getAllVehicles = async (req, res) => {
    await Vehicle.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Retrieve sub Array values of a category
const getVehiclesForCategory = async (req, res) => {
    if (req.params && req.params.id) {
        await Vehicle.find({ categories: req.params.id })
            .then(response => {
                res.status(200).send({ data: response })
            }).catch(error => {
                res.status(500).send({ error: error.messege })
            })
    }
}

//Retrieve all sub array data related to the specific Model
const calculateTripCharges = async (req, res) => {
    if (req.body) {
        const vehicle = await Vehicle.findById(req.body.id);
        let totalAmount = 0;
        if (vehicle.chargePerKm != null) {
            totalAmount = vehicle.chargePerKm *  req.body.amount;
        }
        res.status(200).send({totalAmount});
    }
   
}

// delete an instance by Id
const editVehicle = async (req, res) => {
    if (req.params && req.params.id && req.body) {
        const vehicle = new Vehicle(req.body);
        console.log(vehicle);
        await Vehicle.updateOne({ _id: req.params.id },{vehicle})
            .then(response => {
                res.status(200).send({ data: response })
            }).catch(error => {
                res.status(500).send({ error: error.messege })
            })
    }
}

// delete an instance by Id
const deleteVehicle = async (req, res) => {
    if (req.params && req.params.id) {
        await Vehicle.deleteOne({ _id: req.params.id })
            .then(response => {
                res.status(200).send({ data: response })
            }).catch(error => {
                res.status(500).send({ error: error.messege })
            })
    }
}

//export to use in another class
module.exports = {
    createVehicle,
    getAllVehicles,
    getVehiclesForCategory,
    calculateTripCharges,
    editVehicle,
    deleteVehicle
}