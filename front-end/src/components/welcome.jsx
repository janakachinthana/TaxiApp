//imports
import React, { Component } from 'react';

//class declaretion and inherit from the react
export default class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            //  home view
            <div className="container">
                <br /><br /><br /><br />
                <div className="text-center bg-dark text-light">
                    <br /><br />
                    <h1>Hi.., I am Dissanayake D.M.J.C</h1>
                    <h3>Student Id: IT18226324</h3>
                    <h3>AF Final Examination</h3>
                    <h1>SLIIT</h1>
                    <br /><br />
                </div>
            </div>
        );
    }
}

