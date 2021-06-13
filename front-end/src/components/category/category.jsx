//imports
import React, { Component } from 'react';
import CategoryItemView from './categoryItemView';
import axios from '../../servises/axios.servise';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//class declaretion
export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Categories: []
        }
    }

    // initialze the methods that need done at opening the component
    componentDidMount() {

        //calling back-end for retrieve data
        axios.get(`${process.env.API_URL}category`)
            .then(response => {
                this.setState({ Categories: response.data.data });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <hr />
                        <h1 className="text-center">Trip Categories</h1>

                        {/* nevigate to the add new form */}
                        <Link to="/category/Add" className="btn btn-success">Add New</Link>
                        <hr />
                        <div className="row">
                            {this.state.Categories.map((category) => {
                                return (

                                    // calling patial view
                                    <CategoryItemView
                                        key={category._id}
                                        category={category} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}