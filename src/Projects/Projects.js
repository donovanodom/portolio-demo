import { Container, Col, Row } from "react-bootstrap";
const Projects = () => {
  return (
    <div className="projects">
      <Container fluid>
        <Row>
          <Col className="project">
            <div className="project-box" id="protoswim">
              <div className="pb-div">
                <h1>protoswim</h1>
                <hr />
                <h2>
                  React / Rails multi group-chatting platform for use on
                  collaborative projects
                </h2>
                <div className="project-actions">
                  <div className="video-demo">VIDEO DEMO</div>
                  <div className="github-repo">GITHUB REPO</div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="project">
            <div className="project-box" id="polymr">
              <div className="pb-div">
                <h1>polymr</h1>
                <hr />
                <h2>
                  React / Rails collaboration center & task tracker for use on
                  managing projects
                </h2>
                <div className="project-actions">
                  <div className="video-demo">VIDEO DEMO</div>
                  <div className="github-repo">GITHUB REPO</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
