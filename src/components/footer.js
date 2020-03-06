import React from 'react';
import '../assets/css/footerstyle.css'
import {Container,Row,Col, InputGroup,FormControl} from 'react-bootstrap'
export default function Footer(){
    return(
        <Container fluid={true}>
            <Row className="footerContent">
                <Col>
                <h5>About Company</h5>
                {/* <p>NeoSOFT Technologies is here at your quick and easy service for shooping . </p>
                <p>Contact information</p>
                <p>Email: contact@neosofttech.com</p>
                <p>Phone: +91 0000000000</p>
                <p>MUMBAI, INDIA</p> */}
                <p>
                NeoSOFT Technologies is here at your quick and 
                            easy service for shooping.
                                Contact information
                            Email: contact@neosofttech.com
                                Phone: +91 0000000000
                                    MUMBAI, INDIA
                
                
                </p>
                </Col>
                <Col>
                <h5>Information</h5>
                <p>
                Terms and Conditions
                        Gurantee and Return Policy
                                Contact Us
                        Privacy Policy<br></br>
                        Locate Us
                </p>
                </Col>
                <Col>
                <h5>Newsletter</h5>
                <p>
                Signup to get exclusive offer from our favorite brands and to be well up in the news
                </p>
                <InputGroup>
                    <FormControl id="footer_input" placeholder="your email...">

                    </FormControl>
                </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}