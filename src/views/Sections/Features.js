import React from "react";

import { Container, Row, Col } from "reactstrap";

export default function Features() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
          <div className="space-50" />      
          <div className="space-50" />      
            <Row>
              <Col className="mr-auto text-left" md="8">
                <h1 className="title" style={{ textDecoration: 'underline' }}>Technologies</h1>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info info-hover" style={{ border: '1px dotted pink' }}>
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/primary.png")}
                    />
                    <i className="tim-icons icon-laptop fa-bounce" />
                  </div>
                  <h3 className="info-title">Testing</h3>
                  <hr style={{ border: '1px solid pink', width: '80%' }} />                  
                  <div className="info-horizontal ml-3 mt-3">
                    <div className="icon text-primary">
                      <i className="fa-solid fa-check-double mb-5" />
                      <i className="fa-solid fa-check-double fa-lg mb-5" />
                      <i className="fa-solid fa-check-double  fa-2lx mb-5" />
                      <i className="fa-solid fa-check-double fa-2lx mb-5" />
                    </div>
                    <div className="description">
                      <h4 className="info-title mb-5">Cypress</h4>
                      <h4 className="info-title mb-5">Cucumber</h4>
                      <h4 className="info-title mb-5">Postman</h4>
                      <h4 className="info-title mb-5">JUnit</h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover" style={{ border: '1px dotted green' }}>
                  <div className="icon icon-success">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/success.png")}
                    />
                    <i className="fa-solid fa-bug fa-fade" />
                  </div>
                  <h3 className="info-title">Reporting</h3>
                  <hr style={{ border: '1px solid green', width: '80%' }} />                
                  <div className="info-horizontal ml-3 mt-3">
                    <div className="icon text-success">
                      <i className="fa-brands fa-jira mb-5" />
                      <i className="fa-brands fa-slack fa-lg mb-5" />
                      <i className="fa-solid fa-check-double  fa-2lx mb-5" />
                      <i className="fa-brands fa-confluence fa-2lx mb-5" />
                    </div>
                    <div className="description">
                      <h4 className="info-title mb-5">Jira</h4>
                      <h4 className="info-title mb-5">Slack</h4>
                      <h4 className="info-title mb-5">Zephyr</h4>
                      <h4 className="info-title mb-5">Confluence</h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover" style={{ border: '1px dotted orange' }}>
                  <div className="icon icon-warning">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/warning.png")}
                    />
                    <i className="fa-solid fa-code fa-beat" />
                  </div>
                  <h3 className="info-title">Development</h3>
                  <hr style={{ border: '1px solid orange', width: '80%' }} />                  
                  <div className="info-horizontal ml-3 mt-3">
                    <div className="icon text-warning">
                      <i className="fa-brands fa-java mb-5" />
                      <i className="fa-brands fa-react fa-lg mb-5" />
                      <i className="fa-solid fa-check-double  fa-2lx mb-5" />
                      <i className="fa-brands fa-node fa-2lx mb-5" />
                    </div>
                    <div className="description">
                      <h4 className="info-title mb-5">Java</h4>
                      <h4 className="info-title mb-5">React</h4>
                      <h4 className="info-title mb-5">MySQL</h4>
                      <h4 className="info-title mb-5">Node.JS</h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover" style={{ border: '1px dotted purple' }}>
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/warning.png")}
                    />
                    <i className="fa-solid fa-code-branch fa-bounce" />
                  </div>
                  <h3 className="info-title">Operations</h3>
                  <hr style={{ border: '1px solid purple', width: '80%' }} />                  
                  <div className="info-horizontal ml-3 mt-3">
                    <div className="icon text-secondary">
                      <i className="fa-brands fa-square-git mb-5" />
                      <i className="fa-brands fa-jenkins fa-lg mb-5" />
                      <i className="fa-solid fa-check-double  fa-2lx mb-5" />
                      <i className="fa-brands fa-google fa-2lx mb-5" />
                    </div>
                    <div className="description">
                      <h4 className="info-title mb-5">Git</h4>
                      <h4 className="info-title mb-5">Jenkins</h4>
                      <h4 className="info-title mb-5">Grafana</h4>
                      <h4 className="info-title mb-5">GCP Logs</h4>
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
