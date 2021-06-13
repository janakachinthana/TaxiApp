//imports
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from '../../servises/axios.servise'
//class declaration
class VehicleItemView extends Component{

    constructor(props){
        super(props);
        this.state = {
            Vehicle: this.props.Vehicle
        }
    }

    removeItem(){
        axios.delete(`${process.env.API_URL}vehicle/${this.state.Vehicle._id}`)
                .then(response => {
                    console.log(response.data.data);
                });
    }

    render(){
        return(
            // partial view
            <div className="col-md-4" >
                <div className="card bg-dark ">
                    <div className="card-header">
                    <h1 className="text-center text-warning">{this.state.Vehicle.code}</h1>
                    </div>
                    <div className="card-body text-light">
                        <h4 className="text-center">Name: {this.state.Vehicle.name}</h4>
                        <h4 className="text-center">Model: {this.state.Vehicle.model}</h4>
                        <h4 className="text-center">Type: {this.state.Vehicle.type}</h4>
                        <h4 className="text-center">Rate: {this.state.Vehicle.chargePerKm}</h4>
                    </div>
                    <div className="card-footer">
                    <button className="btn btn-danger" onClick={()=> {
                        this.removeItem()
                    }}> Remove </button>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

//exports
export default withRouter(VehicleItemView);