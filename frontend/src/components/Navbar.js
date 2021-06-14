import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

class Navbar2 extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/customers">
                    Customers
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/emails">
                    Email List
                </NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navbar2