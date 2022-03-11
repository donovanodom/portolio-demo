import { Container, Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="home-name">
              <div id="home-title">DONOVAN ODOM</div>
              <div id="bubble-pink"></div>
              <div id="bubble-purple"></div>
              <Fade left>
                <div className="home-subtitle">
                  RUBY ON RAILS-LOVING, DESIGN-ADEPT, FULL STACK SOFTWARE
                  DEVELOPER
                  <div style={{ display: "inline" }}> &#127783;</div>
                </div>
              </Fade>
            </div>
          </Col>
          <Col className="home-row-1-col"></Col>
        </Row>
        <Row>
          <Col className="home-row-2-col"></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
