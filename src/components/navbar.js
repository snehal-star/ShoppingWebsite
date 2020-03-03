import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {InputGroup,FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import  '../assets/css/navbarstyle.css';



// import { InputGroupPrepend } from 'react-bootstrap/InputGroup';

export default class HomeNavbar extends React.Component{
    render(){
        return(
            <div >
               <Navbar bg="dark" className="homeNav">
                   <Navbar.Brand className="font-weight-bold navbarBrand"><span className="navbarBrandNeo">Neo</span><span className="navbarBrandStore">STORE</span></Navbar.Brand>
                   <Nav className="mr-auto">
                        <Nav.Link className="navbarBrand_home" href="#home">HOME</Nav.Link>
                        <Nav.Link className="navbarBrand_product" href="#product">PRODUCT</Nav.Link>
                        <Nav.Link className="navbarBrand_order" href="#order">ORDER</Nav.Link>
                        <InputGroup className="mb-3" inline>
                            <InputGroup.Prepend className="searchIcon">
                                
                            <InputGroup.Text id="basic-addon1"><i class="fa fa-search" /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            
                            placeholder="Search.."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Button className="cartButton" variant="Link"><i class="fa fa-cart-arrow-down"></i>Cart</Button>
                        <Button className="forUser" variant="Link"><i class="fa fa-angle-down" /></Button>
                   </Nav>
               </Navbar>
            </div>
        );
    }
}