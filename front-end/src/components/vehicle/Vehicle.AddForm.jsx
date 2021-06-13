//imports
import axios from '../../servises/axios.servise';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'
//class declaration
export default class VehicleAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            model: '',
            type: '',
            name: '',
            chargePerKm: null,
            categories: [],
            options: [],
            selectedcategories: []
        }
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

    // onChange handler for select
    onCategorySelect(e) {
        this.setState({ selectedcategories: e ? e.map(item => item.value) : [] });
        console.log(this.state.selectedcategories);
    }

    // onChange handler for select
    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.categoryName);
    }

    // insert data
    save() {

        //object cration with values
        const vehicle = {
            "code": this.state.code,
            "model": this.state.model,
            "type": this.state.type,
            "name": this.state.name,
            "chargePerKm": this.state.chargePerKm,
            "categories": this.state.selectedcategories
        }

        // back-end calling for insert values
        axios.post(`${process.env.API_URL}vehicle`, vehicle)
            .then(response => {
                console.log(response.data);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br /><br />
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 bg-dark text-light">
                                <h1 className="text-center">Add Form</h1>
                                {/* form start */}
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>code</label>
                                                <input type="text" className="form-control" name="code" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>
                                            <div className="form-group">
                                                <label>model</label>
                                                <input type="text" className="form-control" name="model" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>
                                            <div className="form-group">
                                                <label>type</label>
                                                <input type="text" className="form-control" name="type" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>name</label>
                                                <input type="text" className="form-control" name="name" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>
                                            <div className="form-group">
                                                <label>chargePerKm</label>
                                                <input type="text" className="form-control" name="chargePerKm" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>
                                            <div className="text-dark">
                                                <label htmlFor="categories" className="form-label text-light">Select Categories</label>
                                                <Select
                                                    options={this.state.options}
                                                    isMulti
                                                    onChange={(event) => { this.onCategorySelect(event) }}
                                                    className='basic-multi-select'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                    <div className="col-md-3"></div>
                                        <div className="col-md-4">
                                            <Link to="/vehicle"><button type="button" className="btn btn-warning">Cancel</button></Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="/vehicle"><button type="button" className="btn btn-info" onClick={() => { this.save() }}>Submit</button></Link>
                                        </div>
                                    </div>
                                    <br />
                                </form>
                                {/* form end */}
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        )
    }
}