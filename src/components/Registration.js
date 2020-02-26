import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import Assets from '../constants/Image';
import { Form,Button } from 'react-bootstrap';
import Inputs from './inputs'



//Registration page
export default function Registration(){
    return(
        <Container fluid={true}>
            <Row>
                <Col xs={7}>
                    <Image className="sideImage" src={Assets.SIDE_IMAGE} alt="SIDE_IMAGE"/>
                </Col>
                <Col xs={5}>
                    <Row className="signUpInfo">
                    <Form>
                        <h3>Sign Up</h3>
                        <br/><br/>
                        <Inputs Label="Full Name" type="text" placeholder="Name"/>
                        <Inputs Label="Email" type="Email" placeholder="Email"/>
                        <Inputs Label="Username" type="text" placeholder="Username"/>
                        <Inputs Label="Password" type="password" placeholder="************"/>
                        <Inputs Label="Repeat Password" type="password" placeholder="************"/>
                        
                        <Row>
                            <Col>
                                <Button type="submit" className="btn btn-primary btn-block" >Submit</Button>
                            </Col>
                            <Col>
                                <Link to="./signIn">
                                    <Button  type="submit" className="btn btn-info btn-block">Sign in-></Button>
                                </Link>    
                             </Col>
                        </Row>
                    </Form>
                </Row>
                </Col>
            </Row>
        </Container>
    );
} 