import { Container, Col, Row } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";
import { useState } from "react";

const About = () => {
  const [aboutView, setAboutView] = useState(false);

  const skills = [
    "JavaScript",
    "Ruby on Rails",
    "ReactJS",
    "CSS",
    "Audio Engineering",
    "HTML",
    "AWS",
    "Sound Design",
    "Graphic Design",
    "Photoshop"
  ];
  const colors = ["var(--shine)", "var(--blu)", "var(--night)", "var(--tuft)"];

  return (
    <div className="about">
      <Container fluid>
        <Row>
          <Col lg={6}>
            THANK YOU FOR VISITING MY PORTFOLIO! My name is Donovan, or Don- I’m
            a FullStack web developer that specializes in React, JavaScript &
            Redux frontend & Ruby/RoR backend. I enjoy organizing ways to make
            web development efficient, coordinating innovative & communicative
            ways to meet client arrangements & most of all, building projects
            and implementing new technologies to challenge myself as a
            developer.
            <br />
            <br />
            As a future Alumni of Flatiron school for Computer Software
            Engineering (Graduating Feb 2022), I am looking forward to advancing
            my career in the tech industry and furthering my education in the
            field while being a resource for others who have a passion for tech.
            <br />
            <br />
            I’ve worked as a freelance audio-engineer, producer & artist for the
            past 10 years and in various Medical Laboratory roles for the past 7
            years beginning in St. louis, MO and now in Seattle, WA. To contact
            me, please email{" "}
            <div style={{ display: "inline" }}>dodomdev@gmail.com</div>
          </Col>
          <Col lg={6} className="about-right">
            {skills.map((skill, index) => (
              <div>
                <Zoom clear delay={index * 500}>
                  <div className="skill-list">{skill}</div>
                </Zoom>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
