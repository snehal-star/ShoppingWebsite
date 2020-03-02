import React from 'react';
import '../assets/css/footerstyle.css'
import {Container,Row,Col} from 'react-bootstrap'
export default function Footer(){
    return(
        <Container fluid={true}>
            <Row className="footerContent">
                <Col>
                <h5>About Company</h5>
                <p>NeoSOFT Technologies is here at your quick and easy service for shooping . </p>
                <p>Contact information</p>
                <p>Email: contact@neosofttech.com</p>
                <p>Phone: +91 0000000000</p>
                <p>MUMBAI, INDIA</p>
                </Col>
                <Col>
                <h5>Information</h5>
                </Col>
                <Col>
                <h5>Newsletter</h5>
                </Col>
            </Row>
        </Container>
    );
}