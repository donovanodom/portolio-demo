import { Container, Col, Row } from "react-bootstrap";
const Projects = () => {

  return (
    <div className="projects">
      <Container fluid>
        <Row>
          <Col className='project'>
            <div className='project-box' id='protoswim'>
              <h1>protoswim</h1>
              <h2>React / Rails multi group-chatting platform for use on collaborative projects</h2>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
