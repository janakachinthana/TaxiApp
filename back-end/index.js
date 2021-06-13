//imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./util/database.util');
const vehicleAPI = require('./api/vehicle.api');
const categoryAPI = require('./api/category.api');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>welcome</h1>');
})

//enable cors
app.use(cors());
app.use(bodyParser.json());

//set routing
app.use('/vehicle', vehicleAPI());
app.use('/category',categoryAPI());

//run the server
app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});


