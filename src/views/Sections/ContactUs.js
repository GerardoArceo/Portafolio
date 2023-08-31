import React from "react";


import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function ContactUs() {

  return (
    <>
      <div className="cd-section" id="contactus">
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg8.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col>
                <h2 className="title" style={{ textDecoration: 'underline' }}>Contact Me</h2>
                <h4 className="description">
                  Let's work together! It would be a pleasure to work with you,
                  contact me by any of the following ways: <br />
                </h4>
                <Row>
                  <Col md="4">
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="fa-solid fa-envelope" />
                      </div>
                      <div className="description">
                        <h4 className="info-title">Send me a direct email:</h4>
                        <p>
                          <a
                            className="description"
                            href="mailto:nbla.escom@gmail.com"
                            style={{ fontStyle: 'italic' }}
                          >
                            nbla.escom@gmail.com <br />
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col>

                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="fa-brands fa-whatsapp" />
                      </div>
                      <div className="description">
                        <h4 className="info-title">Send me a message:</h4>
                        <p>
                          <a
                            className="description"
                            href="https://api.whatsapp.com/send?phone=5215549359049"
                            style={{ fontStyle: 'italic' }}
                          >
                            (+52) 55 49 35 90 49 <br />
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="fa-brands fa-linkedin" />
                      </div>
                      <div className="description">
                        <h4 className="info-title">Contact me via LinkedIn:</h4>
                        <p>
                          <a
                            className="description"
                            href="https://www.linkedin.com/in/nadia-lopez-aguilar/"
                            style={{ textDecoration: 'underline', fontStyle: 'italic' }}
                          >
                            Click here to check my profile. <br />
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <br /><br /><br /><br />
      </div>{" "}
    </>
  );
}
