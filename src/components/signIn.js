import React from 'react'
import { Form } from 'react-bootstrap'
import {Container,Row,Col} from 'react-bootstrap'
import Inputs from './inputs'
import Assets from '../constants/Image'
import {Image} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

//Sign In Page
export default class SignIn extends React.Component{
    render(){
        return(
            <Container fluid={true}>
                <Row>
                    <Col xs={7}>
                        <Image className="sideImage" src={Assets.SIDE_IMAGE} alt="SIDE_IMAGE"/>
                    </Col>
                    <Col xs={5}>
                        <Row className="signInInfo" >
                            <Form>
                                <h3 className="signInInfo_header">Sign In</h3><br/>
                                <Inputs Label="Username" type="text" placeholder="Username..."/>
                                <br/>
                                <Inputs Label="Password" type="password" placeholder="************"/>
                                <br/>
                                <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Forgot Password?" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="btn btn-primary" >
                                     Submit
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}