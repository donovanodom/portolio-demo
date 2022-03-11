import { Container, Col, Row } from "react-bootstrap";
import { BsGithub, BsMedium, BsLinkedin } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Me from "../svg/Me";

const Home = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="home-name">
              <Fade delay={600} duration={1000}>
                <div id="home-title">DONOVAN ODOM</div>
              </Fade>
              <Fade delay={1500} duration={1000}>
                <div id="bubble-pink"></div>
              </Fade>
              <Fade delay={1200} duration={1400}>
                <div id="bubble-purple"></div>
              </Fade>
              <Fade left>
                <div className="home-subtitle">
                  RUBY ON RAILS-LOVING, DESIGN-ADEPT, FULL STACK SOFTWARE
                  DEVELOPER
                  <div style={{ display: "inline" }}> &#127783;</div>
                </div>
                <div id="me">
                  <Me />
                </div>
              </Fade>
            </div>
            <div className="socials">
              <div id="vert-line"></div>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li className="contact-list">
                  <a href="https://github.com/donovanodom">
                    <BsGithub />
                  </a>
                </li>
                <li className="contact-list">
                  <a href="https://donovanodom.medium.com/">
                    <BsMedium />
                  </a>
                </li>
                <li className="contact-list">
                  <a href="https://www.linkedin.com/in/donovanodom/">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
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
