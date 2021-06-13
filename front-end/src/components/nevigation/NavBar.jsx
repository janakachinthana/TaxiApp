//imports
import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//class declaretion
export default class NavBar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>

                {/* navbar links */}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                    {/* nevigation to welcome component */}
                    <Link to="/" className="nav-link">
                        <Navbar.Brand>App</Navbar.Brand>
                    </Link>

                    {/* handle toggle event for responsive window */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            
                            {/* nevigation to a component */}
                            <Link to="/category" className="nav-link">
                                <h5>Category</h5>
                            </Link>

                             {/* nevigation to a component */}
                            <Link to="/vehicle" className="nav-link">
                                <h5>Vehicle</h5>
                            </Link>

                             {/* nevigation to a component */}
                             <Link to="/cost" className="nav-link">
                                <h5>Cost</h5>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

