import React from 'react'
import {Navbar, InputGroup} from 'react-bootstrap';
import { InputGroupPrepend } from 'react-bootstrap/InputGroup';

export default class HomeNavbar extends React.Component{
    render(){
        return(
            <div className="homeNav">
               <Navbar>
                   <Navbar.Brand>NeoSTORE</Navbar.Brand>
                   <Nav className="mr-auto">
                       <Nav.Link href="#home">HOME</Nav.Link>
                       <Nav.Link href="#product">PRODUCT</Nav.Link>
                       <Nav.Link href="#order">ORDER</Nav.Link>
                       <InputGroup>
                       <InputGroupPrepend></InputGroupPrepend>
                       </InputGroup>
                   </Nav>
               </Navbar>
            </div>
        );
    }
}