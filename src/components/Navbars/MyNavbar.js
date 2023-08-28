import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

import {
    Button,
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    CustomInput
} from "reactstrap";

export default function MyNavbar() {
    return (
        <>
            <Navbar className="navbar-transparent" expand="lg" id="main">
                <Container>
                    <div className="navbar-translate">
                        <button className="navbar-toggler" id="example-header-4">
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                        <NavbarBrand>
                            <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/fotoNadia.jpg")}
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                }}
                                style={{ cursor: 'pointer' }}
                            />
                        </NavbarBrand>
                    </div>
                    <UncontrolledCollapse navbar toggler="#example-header-4">
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Nadia <span>López</span>
                                    </a>
                                </Col>
                                <Col className="collapse-close text-right" xs="6">
                                    <button
                                        className="navbar-toggler"
                                        id="example-header-4"
                                    >
                                        <i className="tim-icons icon-simple-remove" />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="mx-auto" navbar>
                            <NavItem className="mt-2">
                                <AnchorLink href="#AboutMe">
                                    About Me
                                </AnchorLink>
                            </NavItem>
                            <NavItem className="mt-2">
                                <AnchorLink href="#projects">
                                    Experience
                                </AnchorLink>
                            </NavItem>
                            <NavItem className="mt-2">
                                <AnchorLink href="#features">
                                    Knowledge
                                </AnchorLink>
                            </NavItem>
                            <NavItem className="mt-2">
                                <AnchorLink href="#contactus">
                                    Contact Me
                                </AnchorLink>
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>
        </>
    )
}