import { Container, Col, Row } from "react-bootstrap";
const Projects = () => {
  return (
    <div className="projects">
      <Container fluid>
        <Row>
          <Col className="project">
            <div className="project-box" id="protoswim">
              <div>
                <h1>protoswim</h1>
                <hr />
                <h2>
                  React / Rails multi group-chatting platform for use on
                  collaborative projects
                </h2>
              </div>
            </div>
          </Col>
          <Col className="project">
            <div className="project-box" id="polymr">
              <div>
                <h1>polymr</h1>
                <hr />
                <h2>
                  React / Rails collaboration center & task tracker for use on
                  managing projects
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
