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
          <Col className="home-left-col">
            <Logo />
          </Col>

          <Col className="home-right-col">
            <Fade left>
              Donovan Odom is a Ruby on Rails-loving, design-adept, Full Stack
              Software developer settled in Seattle, WA
              <div style={{ display: "inline" }}> &#127783;</div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
