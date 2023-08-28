import React from "react";

import classnames from "classnames";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function ContactUs() {
  const [emailContact1Focus, setEmailContact1Focus] = React.useState(false);
  const [firstNameContact1Focus, setFirstNameContact1Focus] =
    React.useState(false);
  const [lastNameContact1Focus, setLastNameContact1Focus] =
    React.useState(false);

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
                            href="https://w.app/DyRhQn"
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
              {/* <Col className="ml-auto mr-auto" md="5">
                <Card className="card-contact card-raised">
                  <Form id="contact-form-2" method="post" role="form">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Get in touch!</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <label>First name</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": firstNameContact1Focus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                              onFocus={(e) => setFirstNameContact1Focus(true)}
                              onBlur={(e) => setFirstNameContact1Focus(false)}
                            />
                          </InputGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": lastNameContact1Focus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                                onFocus={(e) => setLastNameContact1Focus(true)}
                                onBlur={(e) => setLastNameContact1Focus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailContact1Focus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email Here..."
                            type="text"
                            onFocus={(e) => setEmailContact1Focus(true)}
                            onBlur={(e) => setEmailContact1Focus(false)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                          id="message-2"
                          name="message"
                          rows="6"
                          type="textarea"
                        />
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <Button
                            className="btn-round"
                            color="primary"
                          >
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Card>
              </Col> */}
            </Row>
          </Container>
        </div>
        <br /><br /><br /><br />
      </div>{" "}
    </>
  );
}
