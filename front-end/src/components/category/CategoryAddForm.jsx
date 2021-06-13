//imports
import axios from '../../servises/axios.servise';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//class declaretion
export default class CategoryAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryName: ''
        }
    }

    //onChange Handler for any of keyboard input
    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.categoryName);
    }

    // back-end calling for insert data
    save() {
        const category = { "categoryName": this.state.categoryName }
        axios.post(`${process.env.API_URL}category`, category)
            .then(response => {
                console.log(response.data);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 bg-dark text-light">
                                <h1 className="text-center">Add Form</h1>
                                {/* start form */}
                                <form>
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <input type="text" className="form-control" name="categoryName" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Link to="/category"><button type="button" className="btn btn-warning">Cancel</button></Link>

                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <Link to="/category"><button type="button" className="btn btn-info" onClick={() => { this.save() }}>Submit</button></Link>
                                        </div>
                                    </div>
                                    <br /><br />
                                </form>
                                {/* end form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}