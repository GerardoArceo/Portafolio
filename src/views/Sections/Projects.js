import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Projects() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="cd-section" id="projects">
        <div className="projects-2 project-raised">
          <Container>
          <div className="space-50" />        
          <div className="space-50" />      
            <Row>
              <Col className="mr-auto text-left mb-3" lg="8">
                <h1 className="title" style={{ textDecoration: 'underline' }}>Job Experience</h1>
                <div className="section-space" />
              </Col>
            </Row>
            <div className="mt-7" />
            <Nav
              className="nav-pills-success nav-pills-icons nav-pills-lg me-auto"
              pills
              role="tablist"
            >
            <NavItem>
                <NavLink
                  className={activeTab === "1" ? "active" : ""}
                  onClick={() => {
                    toggle("1");
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    alt="BetterCloud"
                    src={require("assets/img/BetterCloud.png")}
                    style={{ height: '60px', width: '160px' }}
                  />
                </NavLink>
              </NavItem>
              <NavItem className="ml-2">
                <NavLink
                  className={activeTab === "2" ? "active" : ""}
                  onClick={() => {
                    toggle("2");
                  }}
                  style={{ cursor: 'pointer', height: '80px' }}
                >
                  <img
                    alt="Kandy"
                    src={require("assets/img/kandy.png")}
                    style={{ height: '60px', width: '160px' }}
                  />
                </NavLink>
              </NavItem>
              <NavItem className="ml-2">
                <NavLink
                  className={activeTab === "3" ? "active" : ""}
                  onClick={() => {
                    toggle("3");
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    alt="Kandy"
                    src={require("assets/img/Liberato.png")}
                    style={{ height: '60px', width: '160px' }}
                  />
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="tab-space" activeTab={"project" + activeTab}>
              <TabPane tabId="project1">
                <div className="space-50" />
                <Col className="mr-auto ml-4" md="12">
                  <div className="text-left">
                    <Row>
                      <Col md="7">
                        <h3 className="mb-2 text-success" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                          Software Development Engineer in Test
                        </h3>
                        <h6 className="mb-5">
                          October 2023 - Present
                          <hr style={{ border: '1px dashed green', width: '100%' }} />
                        </h6>
                        <ul style={{ opacity: '0.8'}}>
                          <li> Defined and implemented the test strategy for a team in a SaaS application management company.  
                            <br />
                            <br /></li>
                          <li> Developed and crafted detailed test plans and test cases aligned with the product team's requirements.
                            <br />
                            <br /></li>
                          <li>Created, maintained, and optimized end-to-end automated test suites. 
                            <br />
                            <br /></li>
                          <li>Led the migration and development of back-end integration tests<br />
                            <br /></li>
                          <li>Performed exploratory testing. <br />
                            <br /></li>
                        </ul>
                      </Col>
                      <Col md="5">
                        <table style={{ width: "100%" }}>
                          <tr>
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="share-btn-img"
                                src={require("assets/img/presentation-page/grafana.png")}
                                style={{ height: '60px' }}
                              />
                            </th>
                            <th />
                          </tr>
                          <tr>
                            <th />
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="share-btn-img"
                                src={require("assets/img/presentation-page/gpc.png")}
                                style={{ height: '110px' }}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="linkedin-btn-img"
                                src={require("assets/img/presentation-page/cypress.png")}
                                style={{ height: '80px' }}
                              />
                            </th>
                            <th />
                          </tr>
                          <tr>
                            <th />
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="linkedin-btn-img"
                                src={require("assets/img/presentation-page/cucumber.png")}
                                style={{ height: '120px' }}
                              />
                            </th>
                          </tr>
                        </table>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <div className="space-100" />
              </TabPane>
              <TabPane tabId="project2">
                <div className="space-50" />
                <Col className="mr-auto ml-4" md="12">
                  <div className="text-left">
                    <Row>
                      <Col md="7">
                        <h3 className="mb-2 text-success" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                          Quality Assurance Engineer
                        </h3>
                        <h6 className="mb-5">
                          October 2021 - May 2023
                          <hr style={{ border: '1px dashed green', width: '100%' }} />
                        </h6>
                        <ul style={{ opacity: '0.8'}}>
                          <li> Reported and documented testing result reports and tracked bug tickets.<br />
                            <br /></li>
                          <li> Created and monitored smoke, regression, and sanity tests.<br />
                            <br /></li>
                          <li> Designed and developed API test scripts for automated validations in a CI/CD environment. <br />
                            <br /></li>
                          <li>Conducted test plans and test case reviews.<br />
                            <br /></li>
                        </ul>
                      </Col>
                      <Col>
                        <table style={{ width: "100%" }}>
                          <tr>
                            <th />
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="share-btn-img"
                                src={require("assets/img/presentation-page/postman.png")}
                                style={{ height: '150px' }}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="share-btn-img"
                                src={require("assets/img/presentation-page/myslq.png")}
                                style={{ height: '50px' }}
                              />
                            </th>
                            <th />
                          </tr>
                          <tr>
                            <th />
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="linkedin-btn-img"
                                src={require("assets/img/presentation-page/jenkins.png")}
                                style={{ height: '50px' }}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="linkedin-btn-img"
                                src={require("assets/img/presentation-page/confluence.png")}
                                style={{ height: '100px' }}
                              />
                            </th>
                            <th />
                          </tr>
                        </table>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <div className="space-100" />
              </TabPane>
              <TabPane tabId="project3">
                <div className="space-50" />
                <Col className="mr-auto ml-4 mt-3" md="12">
                  <div className="text-left">
                    <Row>
                      <Col md="7">
                        <h3 className="mb-2 text-success" style={{ textTransform: 'uppercase', fontWeight: 'bold'}}>
                          Full-Stack Developer
                        </h3>
                        <h6 className="mb-5">
                          January 2021 - June 2021
                          <hr style={{ border: '1px dashed green', width: '100%' }} />
                        </h6>
                        <ul style={{ opacity: '0.8'}}>
                          <li>Designed, developed and maintained UI components and back-end services.  <span style={{ fontStyle: 'italic' }}>(React, MySQL, Javascipt, Node)</span> <br />
                            <br /></li>
                          <li>Creation of component unit tests and integration tests. <span style={{ fontStyle: 'italic' }}>(React Testing Library)</span> <br />
                            <br /></li>
                          <li>Creation and application of custom hooks. <span style={{ fontStyle: 'italic' }}>(Javascript)</span> <br />
                            <br /></li>
                          <li>Implementation of Redux Toolkit
                            for component state management. <span style={{ fontStyle: 'italic' }}>(Redux Toolkit)</span> <br /></li>
                        </ul>
                      </Col>
                      <Col md="5">
                        <table style={{ width: "100%" }}>
                          <tr>
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="share-btn-img"
                                src={require("assets/img/presentation-page/javascript.png")}
                                style={{ height: '50px' }}
                              />
                            </th>
                            <th />
                          </tr>
                          <tr>
                            <th />
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="share-btn-img"
                                src={require("assets/img/presentation-page/node.png")}
                                style={{ height: '100px' }}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="linkedin-btn-img"
                                src={require("assets/img/presentation-page/myslq.png")}
                                style={{ height: '50px' }}
                              />
                            </th>
                            <th />
                          </tr>
                          <tr>
                            <th />
                            <th />
                            <th>
                              <img
                                alt="..."
                                className="linkedin-btn-img"
                                src={require("assets/img/presentation-page/reactjs.png")}
                                style={{ height: '50px' }}
                              />
                            </th>
                          </tr>
                        </table>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <div className="space-100" />
              </TabPane>
            </TabContent>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
