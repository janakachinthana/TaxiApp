//Create object
const Category = require('../models/category.model');

//insert to the database
const createCategory = async (req, res) => {
    //to prevent crashes
    if (req.body) {
        const category = new Category(req.body);
        category.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Retrieve all data related to the model
const getAllCategories = async (req, res) => {
    await Category.find({}).populate('vehicles')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Retrieve all sub array data related to the specific Model
const getVehiclesForCategory = async (req, res) => {

    if (req.params && req.params.id) {
        await Category.findById(req.params.id).populate('vehicles')
            .then(data => {
                res.status(200).send({ data: data.vehicles });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getVehicleByCategory = async (req, res) => {
    if (req.params && req.params.id) {
        await Vehicle.find({ categories: req.params.id })
            .then(response => {
                res.status(200).send({ data: response })
            }).catch(error => {
                res.status(500).send({ error: error.messege })
            })
    }
}

//Retrieve cost and calculate and return
const calculateTripCharges = async (req, res) => {
    if (req.params && req.params.id) {
        const category = await Category.findById(req.params.id).populate('vehicles', 'chargePerKm');
        let totalAmount = 0;
        if (category.vehicles.length > 0) {
            category.vehicles.map((vehicles) => {
                totalAmount += vehicles.chargePerKm;
            });
        }
        res.status(200).send({ totalAmount: totalAmount });
    }
}

// delete an instance by Id
const deleteCategory = async (req, res) => {
    if (req.params && req.params.id) {
        await Category.deleteOne({ _id: req.params.id })
            .then(response => {
                res.status(200).send({ data: response })
            }).catch(error => {
                res.status(500).send({ error: error.messege })
            })
    }
}


//export to use in another class
module.exports = {
    createCategory,
    getAllCategories,
    getVehiclesForCategory,
    calculateTripCharges,
    deleteCategory
}