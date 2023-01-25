import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { toast } from 'react-toastify';
import Notification from "../Notification";
import "./index.css";
import logo from "../../assets/images/logo.png";
import { authenticate } from "../../services/githubService";

/**
 * Login Display Page
 *
 * @description: Shows a Login component with a form to enter username & password
 * @returns Login Component
 */
function Login() {
    const [userLogin, setUserLogin] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleTextInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserLogin({ ...userLogin, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userLogin.username.trim() && userLogin.password.trim()) {
            const { username, password } = userLogin;
            authenticate(username, password)
            .then(res => {
                localStorage.setItem('user-token', res.token)
                toast.success('Login Success!!!')
                setTimeout(() => window.location.href = process.env.DASHBOARD_URL, 3000)
            })
            .catch(err => {
                toast.error('Login Failed!!!')
            })
        }
    };
    return (
        <Container fluid className="h-auto login-card">
            <Notification />
            <Row>
                <Col>
                    <Form>
                        <Image src={logo} alt="Github Logo" className="logo" />
                        <h1>Login Here</h1>
                        <Row className="justify-content-md-center">
                            <Col lg={6}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        name="username"
                                        type="text"
                                        placeholder="Enter Username"
                                        onChange={handleTextInput}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col lg={6}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleTextInput}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg={6}>
                                <Button variant="primary" type="button" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
