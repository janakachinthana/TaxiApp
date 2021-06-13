//imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../servises/axios.servise';
import VehicleItemView from './vehicleItemView';

//calss declaretion
export default class Vehicle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Vehicles: [],
            status: this.props.status,
            hedding: 'All Vehicles'
        }
    }

    // initialze the methods that need done at opening the component
    componentDidMount() {

        //get id form url
        const id = this.props?.match?.params?.id;

        //check the route by using props for retrieve data
        this.state.status ? // used elvis operator

            //calling back-end to get all data
            axios.get(`${process.env.API_URL}vehicle`)
                .then(response => {
                    this.setState({ Vehicles: response.data.data });
                })
            :
            //calling back-end to get data
            axios.get(`${process.env.API_URL}vehicle/${id}`)
                .then(response => {
                    console.log(response.data.data);
                    this.setState({ Vehicles: response.data.data, status: true });
                });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <hr />
                        <h1 className="text-center">{this.state.hedding}</h1>

                        {/* navigate to the add form */}
                        <Link to="/vehicle/Add" className="btn btn-success">Add New</Link>
                        <hr />
                        <div className="row">
                            {this.state.Vehicles.map((category) => {
                                return (
                                    // calling partial view
                                    <VehicleItemView
                                        key={category._id}
                                        Vehicle={category} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}