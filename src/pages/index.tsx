import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Heading } from '@/components/Heading';

const HomePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home - 3reenshop</title>
            </Head>
            <Navbar bg="light" expand="lg">
                <Container className="container-fluid">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="container-fluid">
                <Row className="pt-5">
                    <Col className="my-auto">
                        <Heading as="h1">
                            Welcome to 3reenshop e-commerce <span>app</span>
                        </Heading>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
