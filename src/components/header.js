import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';


export default class Header extends React.Component{
     render() {
         return (
         <Navbar inverse collapseOnSelect>
         <Navbar.Header>
            
            <Image src="..\img\logo.jpg" width="10%" padding=" 7px 14px" circle />
       
         </Navbar.Header>
         <Nav>
         <h1>Vape Supply Loyalty Points</h1>
           {/* <NavItem eventKey={1}>
             Link
           </NavItem>
           <NavItem eventKey={2}>
             Link
           </NavItem>
           <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
             <MenuItem eventKey={3.1}>Action</MenuItem>
             <MenuItem eventKey={3.2}>Another action</MenuItem>
             <MenuItem eventKey={3.3}>Something else here</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey={3.4}>Separated link</MenuItem>
           </NavDropdown> */}
         </Nav>
       </Navbar>);
     }
}