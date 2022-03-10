import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../svg/Logo";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col xs={12} className="home-row-name">
            <div id="home-name">
              <div style={{ marginLeft: "-30vw" }}>Donovan</div>
              <div style={{ marginLeft: "30vw" }}>Odom</div>
            </div>
          </Col>
          <Col className="home-row-1-col">
            <Fade left>
              <div>
                Ruby on Rails-loving, design-adept, Full Stack Software
                developer settled in Seattle, WA
                <div style={{ display: "inline" }}> &#127783;</div>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col className="home-row-2-col"></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
