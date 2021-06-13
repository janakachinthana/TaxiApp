//imports
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import axios from '../../servises/axios.servise'
//class declaretion
class CategoryItemView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Category: this.props.category
        }
    }

    removeItem(){
        axios.delete(`${process.env.API_URL}category/${this.state.Category._id}`)
                .then(response => {
                    console.log(response.data.data);
                });
    }

    
    render() {
        return (
            //partial view
            <div className="col-md-4" >
                <div className="card bg-dark text-warning">
                    <div className="card-header">
                        <h1 className="text-center">{this.state.Category.categoryName}</h1>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary mr-5" onClick={()=> {
                            const {history} = this.props;
                            history.push(`/vehicle/${this.state.Category._id}`);
                        }}> View Vehicles</button>
                         <button className="btn btn-danger ml-5" onClick={()=> {
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
export default withRouter(CategoryItemView);