import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

// core components
import InfoNavbar from "sections/InfoNavbar.js";
import AboutUsHeader from "sections/AboutUsHeader.js";
import FooterAboutUs from "sections/FooterGray.js";

function AboutUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <InfoNavbar />
      <AboutUsHeader />
      <div className="main">
        <div className="section">
          <Container>
            <h3 className="title-uppercase">We are a part of SMU's Senior Design Class.</h3>
            <p>This course is broken down into two parts:</p>
            <p>
            The first part of this course focuses on software engineering life cycles and project management in-class instructions. This part will prepare students for the industry project engagements. We will review the project dashboards, timelines, risk management, schedule management, and meeting logistics. There will be an exam at the end of September. 
            </p>
            <p>
            The second part of this course focuses on team projects working directly with industry partners to design, build, test, and deploy a computer science related project. The student project teams will work directly with the industry partner. Student project teams will meet periodically with professor on status, issues, risks, and team ways of working.
            </p>
            <h3 className="title-uppercase">
              This is our <i class="fa-solid fa-3"></i>RD Project for the Class
            </h3>
            <p>
              Out first project was for Lockton, planning to create a Absenteeism Prediction Portal. The second was with TrenData to upgrade their system to handlde Big Data. Now this is our final project with Dr. Smith as our representative.
            </p>
            <h2 className="text-center creators" id="Contact">Creators</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("images/jayson.jpg")
                          }
                        />
                        <CardTitle tag="h4">Jayson Werth</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Computer Science B.S. w/ Security Concentration, Cybersecurity M.S. <br />
                      Skills: Full Stack Development, C++, HTML, CSS, JavaScript, React, SQL, MongoDB, Git, Python
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      id="tooltip65260554"
                      type="button"
                    >
                      <i className="fas fa-envelope" />
                    </Button>
                    <UncontrolledPopover
                      trigger="focus"
                      placement="bottom"
                      target="tooltip65260554"
                    >
                      <PopoverHeader>SMU Email</PopoverHeader>
                      <PopoverBody>
                        jwerth@smu.edu
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="https://github.com/jayjayjetpain"
                    >
                      <i className="fa-brands fa-github" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("images/tim.jpg")
                          }
                        />
                        <CardTitle tag="h4">Timothy Lee</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Computer Science Major w/Machine Learning and AI specialization<br />
                      Skills - C++, python, R, SQL, NoSQL systems, React, Node.js,  data mining, machine learning
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      id="tooltip65260555"
                      type="button"
                    >
                      <i className="fas fa-envelope" />
                    </Button>
                    <UncontrolledPopover
                      trigger="focus"
                      placement="bottom"
                      target="tooltip65260555"
                    >
                      <PopoverHeader>SMU Email</PopoverHeader>
                      <PopoverBody>
                        hunjael@smu.edu
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="https://github.com/timlee0131"
                    >
                      <i className="fa-brands fa-github" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("images/corey.jpg")
                          }
                        />
                        <CardTitle tag="h4">Corey Clemons</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Computer Science B.S. w/ Mathematics Minor <br />
                      Skills: C++, Java, JavaScript, HTML, Python, SQL, React, Scientific 
                      Computing
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      id="tooltip65260556"
                      type="button"
                    >
                      <i className="fas fa-envelope" />
                    </Button>
                    <UncontrolledPopover
                      trigger="focus"
                      placement="bottom"
                      target="tooltip65260556"
                    >
                      <PopoverHeader>SMU Email</PopoverHeader>
                      <PopoverBody>
                        cclemons@smu.edu
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="https://github.com/CeeCeeLemons"
                    >
                      <i className="fa-brands fa-github" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("images/alex.jpg")
                          }
                        />
                        <CardTitle tag="h4">Alex Meech</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Computer Science and Mathematics B.S, Computer Science M.S. <br />
                      Skills: Engineering Management, C/C++, Java, HTML, CSS, SQL, Redis, MSSQL, C#, 
                      Python, Machine Learning, NodeJS, React, Docker, AWS, Google Cloud
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      id="tooltip65260557"
                      type="button"
                    >
                      <i className="fas fa-envelope" />
                    </Button>
                    <UncontrolledPopover
                      trigger="focus"
                      placement="bottom"
                      target="tooltip65260557"
                    >
                      <PopoverHeader>SMU Email</PopoverHeader>
                      <PopoverBody>
                        ameech@smu.edu
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="https://github.com/alexjmeech"
                    >
                      <i className="fa-brands fa-github" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default AboutUs;
