//imports
import axios from '../../servises/axios.servise'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'

// class declaration
export default class Cost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
            vehicles: [],
            option2: [],
            selectedvehicle: '',
            categories: [],
            options: [],
            cost: 0
        }
    }

    // onChange handler for select
    onCategorySelect(e) {
        axios.get(`${process.env.API_URL}vehicle/${e.value}`)
            .then(response => {
                this.setState({ vehicles: response.data.data }, () => {
                    let data = [];
                    this.state.vehicles.map((item, index) => {
                        let vehicle = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(vehicle)
                    })
                    this.setState({ options2: data });
                })
            })
    }

    // onChange handler for every input
    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.amount);
    }

    // onChange handler for select
    onVehicleSelect(e) {
        this.setState({ selectedvehicle: e.value });
        console.log(this.state.selectedvehicle);
    }

    // initialze the methods that need done at opening the component
    componentDidMount() {
        axios.get(`${process.env.API_URL}category`)
            .then(response => {
                this.setState({ categories: response.data.data }, () => {
                    let data = [];
                    this.state.categories.map((item, index) => {
                        let category = {
                            value: item._id,
                            label: item.categoryName
                        }
                        data.push(category)
                    })
                    this.setState({ options: data });
                })
            })
    }

    // calculate total by calling back-end
    calculate() {
        //object cration with values
        const calc = {
            "id": this.state.selectedvehicle,
            "amount": this.state.amount,
        }
        // back-end calling for insert values
        axios.post(`${process.env.API_URL}vehicle/cost`, calc)
            .then(response => {
                this.setState({ cost: response.data.totalAmount });
                console.log(this.state.cost);
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <h1 className="text-center">Find Cost</h1>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 bg-dark text-light">
                            <form>
                                <br />
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="text" className="form-control" name="amount" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                </div>
                                <div className="form-group text-dark">
                                    <label htmlFor="categories" className="form-label">Select Category</label>
                                    <Select
                                        options={this.state.options}
                                        onChange={(event) => { this.onCategorySelect(event) }}
                                        className='basic-multi-select'
                                    />
                                </div>
                                <div className="form-group text-dark">
                                    <label htmlFor="categories" className="form-label">Select vehicle</label>
                                    <Select
                                        options={this.state.options2}
                                        onChange={(event) => { this.onVehicleSelect(event) }}
                                        className='basic-multi-select'
                                    />
                                </div>
                                <br /><br />
                                <div className="row">
                                    <div className="col-md-4">
                                        <Link to="/"><button type="button" className="btn btn-warning">Cancel</button></Link>
                                    </div>
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <button type="button" className="btn btn-info" onClick={() => { this.calculate() }}>Submit</button>
                                    </div>
                                </div>
                                <br /><br />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 bg-info text-light">
                            <h1 className="text-center">Cost: {this.state.cost}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}