import React from "react";

import { Container, Row, Col } from "reactstrap";

export default function Features() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="mr-auto text-left" md="8">
                <h1 className="title" style={{ textDecoration: 'underline' }}>Technologies</h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover" style={{ border: '1px dotted pink' }}>
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/primary.png")}
                    />
                    <i className="tim-icons icon-laptop fa-bounce" />
                  </div>
                  <h3 className="info-title">Web</h3>
                  <hr style={{ border: '1px solid pink', width: '80%' }} />
                  <p className="description">Development technologies I use ...</p>
                  <div className="info-horizontal ml-3 mt-3">
                    <div className="icon text-primary">
                      <i className="fa-brands fa-react mb-5" />
                      <i className="fa-brands fa-node mb-5" />
                      <i className="fa-solid fa-check-double fa-lg mb-5" />
                    </div>
                    <div className="description">
                      <h4 className="info-title mb-5">React</h4>
                      <h4 className="info-title mb-5">Node.js</h4>
                      <h4 className="info-title mb-5">Redux Toolkit</h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover" style={{ border: '1px dotted green' }}>
                  <div className="icon icon-success">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/success.png")}
                    />
                    <i className="tim-icons icon-coins fa-fade" />
                  </div>
                  <h3 className="info-title">Data</h3>
                  <hr style={{ border: '1px solid green', width: '80%' }} />
                  <p className="description">Databases I have worked with ...</p>
                  <div className="info-horizontal ml-3 mt-3">
                    <div className="icon text-success">
                      <i className="fa-solid fa-check-double mb-5" />
                      <i className="fa-solid fa-check-double fa-lg mb-5" />
                      <i className="fa-solid fa-fire  fa-2lx mb-5" />
                    </div>
                    <div className="description">
                      <h4 className="info-title mb-5">MySQL</h4>
                      <h4 className="info-title mb-5">MongoDB</h4>
                      <h4 className="info-title mb-5">FireStore</h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover" style={{ border: '1px dotted orange' }}>
                  <div className="icon icon-warning">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/warning.png")}
                    />
                    <i className="fa-solid fa-code-branch fa-beat" />
                  </div>
                  <h3 className="info-title">API & CI/CD</h3>
                  <hr style={{ border: '1px solid orange', width: '80%' }} />
                  <p className="description">Tools I used as a QA engineer ...</p>
                  <div className="info-horizontal ml-3 mt-3">
                    <div className="icon text-warning">
                      <i className="fa-brands fa-jenkins mb-5" />
                      <i className="fa-solid fa-check-double mb-5" />
                      <i className="fa-solid fa-code fa-lg mb-5" />
                    </div>
                    <div className="description">
                      <h4 className="info-title mb-5">Jenkins</h4>
                      <h4 className="info-title mb-5">Postman</h4>
                      <h4 className="info-title mb-5">Newman</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>{" "}
    </>
  );
}
