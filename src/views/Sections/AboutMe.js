import React from "react";
import classnames from "classnames";

import {
  Container,
  Row,
  Col,
  Progress,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";




export default function AboutMe() {

  const [hTabs, sethTabs] = React.useState(1);

  const english = 75;

  const wrapper = React.useRef(null);

  const toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    switch (stateName) {
      case "hTabs":
        sethTabs(index);
        break;
      default:
    }
  };

    React.useEffect(() => {
    document.body.classList.add("presentation-page");
    return function cleanup() {
      document.body.classList.remove("presentation-page");
    };
  }, []);

  return (
    <>
      <div className="section section-basic-components" id="AboutMe">
        <Container>
          <Row>
            <Col md="6">
              <h1 className="title" style={{ textDecoration: 'underline' }}>About Me</h1>
              <h5>
                <p className="text-primary">Hi! my name is Nadia and I'm a Front-end developer ...</p>
              </h5>
              <Nav className="nav-pills-primary mt-5" pills role="tablist">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: hTabs === 1,
                    })}
                    onClick={(e) => toggleTabs(e, "hTabs", 1)}
                    style={{ cursor: 'pointer' }}
                  >
                    Description
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: hTabs === 2,
                    })}
                    onClick={(e) => toggleTabs(e, "hTabs", 2)}
                    style={{ cursor: 'pointer' }}
                  >
                    Education
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: hTabs === 3,
                    })}
                    onClick={(e) => toggleTabs(e, "hTabs", 3)}
                    style={{ cursor: 'pointer' }}
                  >
                    Languajes
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="tab-space" activeTab={"hTabs" + hTabs}>
                <TabPane tabId="hTabs1">
                  <br />
                  I consider myself a hardworking, motivated, and
                  responsible person looking for continuous learning
                  growth in technology. <br />
                  <br />
                  I believe in maintaining a positive and collaborative
                  work ethic. I am able to work in a team environment,
                  and also, on my own initiative. <br />
                  <br />
                  I adapt well to change and challenges. I believe that
                  my skills can contribute to making a positive and
                  meaningful impact on a company or team.
                </TabPane>
                <TabPane tabId="hTabs2">
                  <Row>
                    <Col lg="4" md="6" className="ml-3">
                      <Card className="card-profile card-plain">
                        <Row>
                          <div className="card-avatar">
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/batiz.png")}
                            />
                          </div>
                          <CardBody>
                            <h6 className="card-category">National Polytechnic Institude</h6>
                            <CardTitle tag="h5">Associate Degree in Programming</CardTitle>
                          </CardBody>
                        </Row>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-profile card-plain">
                        <Row>
                          <div className="card-avatar">
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/escom.jpeg")}
                            />
                          </div>
                          <CardBody>
                            <h6 className="card-category">National Polytechnic Institude</h6>
                            <CardTitle tag="h5">B.S in Computer Systems Engineering</CardTitle>
                          </CardBody>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="hTabs3">
                  <br></br>
                  <Col md="8">
                    <div className="progress-container progress-success">
                      <span className="progress-badge">Spanish</span>
                      <Progress max="100" value="100" />
                    </div>
                    <div className="progress-container progress-success">
                      <span className="progress-badge">English</span>
                      <Progress max="100" value={english} />
                    </div>
                    <br /><br /><br />
                  </Col>
                </TabPane>
              </TabContent>
            </Col>
            <Col lg="6" md="12" className="presentation-page">
              <div className="image-container">
                <img
                  alt="..."
                  className="table-img"
                  src={require("assets/img/presentation-page/react.png")}
                />
                <img
                  alt="..."
                  className="share-btn-img"
                  src={require("assets/img/presentation-page/javascript.png")}
                />
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/node.png")}
                />
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/postman.png")}
                />
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/myslq.png")}
                />
                <img
                  alt="..."
                  className="path path3"
                  src={require("assets/img/path3.png")}
                />
                {/* SVG Illustration */}
                <figure className="ie-non-standard-hero-shape">
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="10 12 878.9 907"
                    style={{ enableBackground: "new 10 12 878.9 907" }}
                    xmlSpace="preserve"
                    className="injected-svg js-svg-injector"
                  >
                    <g>
                      <defs>
                        <path
                          id="firstShape"
                          d="M329.15,403.44c30.22-62,26.51-223.94,94.06-268.46C479,98.23,560.16,257,700.68,151.61c71.25-53.44,85.54,81,160.38,172.6C1008.5,504.74,881.5,639.14,825.35,686.6c-62.54,52.85-246.14,24.42-386.7,79.28S214.07,834,202.07,702C190.39,573.57,288.69,486.43,329.15,403.44Z"
                        />
                      </defs>
                      <clipPath id="secondShape">
                        <use
                          xlinkHref="#firstShape"
                          style={{ overflow: "visible" }}
                        />
                      </clipPath>
                      <g clipPath="url(#secondShape)">
                        <image
                          id="imageShape1"
                          style={{ overflow: "visible" }}
                          width="900"
                          height="900"
                          xlinkHref={require("assets/img/AboutMe.jpg")}
                          transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                        />
                      </g>
                    </g>
                    <g>
                      <defs>
                        <path
                          id="thirdShape"
                          d="M337.17,855.62c-7.81-35.46,42.38-43.95,63.66-52.44,24.39-9.74,135.86-48,192.58-52.52,64.22-5.13,190.21-26.84,160.46,35.34-19.76,41.3-51.47,64.52-87.63,62.33-46.36-2.81-101.56,4.39-150.8,44C448.53,946.08,450.93,865,412,868,372.28,871,340.79,872.08,337.17,855.62Z"
                        />
                      </defs>
                      <clipPath id="fourthShape">
                        <use
                          xlinkHref="#thirdShape"
                          style={{ overflow: "visible" }}
                        />
                      </clipPath>
                      <g
                        transform="matrix(1 0 0 1 0 0)"
                        clipPath="url(#fourthShape)"
                      >
                        <image
                          id="imageShape2"
                          style={{ overflow: "visible" }}
                          width="900"
                          height="1000"
                          xlinkHref={require("assets/img/AboutMe.jpg")}
                          transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                        >
                          {" "}
                        </image>
                      </g>
                    </g>
                  </svg>
                </figure>
                {/* End SVG Illustration */}
              </div>
            </Col>
          </Row>
        </Container>
        <br /><br /><br />
      </div>{" "}
    </>
  );
}
