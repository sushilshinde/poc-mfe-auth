import React from 'react'
import {Button, Col, Container, Form, Row, Image } from 'react-bootstrap'
import Notification from '../Notification'
import logo from "../../assets/images/logo.png";
import '../LoginPage/index.css';

const Logout = () => {
  return (
    <Container fluid className="h-auto login-card">
            <Notification />
            <Row>
                <Col>
                    <Form>
                        <Image src={logo} alt="Github Logo" className="logo" />
                        <h1>You have been logged out...</h1>
                        <Row className="justify-content-md-center">
                            <Col lg={6}>
                                <Button variant="primary" type="button" onClick={() => {
                                    window.location.href = process.env.LOGOUT_URL
                                }}>
                                    Login Again
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
  )
}

export default Logout