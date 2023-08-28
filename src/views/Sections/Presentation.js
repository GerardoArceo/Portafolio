import React from "react";
import CV_PDF from '../../assets/documents/Nadia-CV.pdf';

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
import MyNavbar from "components/Navbars/MyNavbar";



export default function Presentation() {

    return (
        <>
            <div className="cd-section" id="headers">
                <div className="header header-4">
                    <div className="header-wrapper">
                        <MyNavbar />
                        <div className="page-header header-video header-filter" style={{ zIndex: 1 }}>
                            <div className="overlay"/>
                            <video
                                autoPlay="autoplay"
                                loop="loop"
                                muted="muted"
                                playsInline="playsinline"
                            >
                                <source
                                    src={require("assets/video/Mt_Baker.mp4")}
                                    type="video/mp4"
                                />
                            </video>
                            <Container className="text-center" style={{ position: 'absolute',  maxWidth: '100%' }}>
                                <div className="video-text">
                                    <br /><br /><br /><br /><br /><br />
                                    <h1 className="title">Nadia López</h1>
                                    <h2 className="description">Front-end Developer</h2>
                                    <br />
                                    <Button
                                        className="btn-simple btn-neutral"
                                        color="default"
                                        href={CV_PDF}
                                        target="_blank"
                                        rel="noreferrer"
                                        download="Nadia's_CV"
                                    >
                                        Download CV
                                    </Button>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>{" "}
        </>
    );
}
