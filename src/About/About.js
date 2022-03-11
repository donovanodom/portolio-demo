import { Container, Col, Row } from "react-bootstrap";
import TextLoop from "react-text-loop";

const About = () => {
  const skills = [
    "JavaScript",
    "Ruby on Rails",
    "ReactJS",
    "CSS",
    "HTML",
    "AWS",
    "Audio Engineering",
    "Sound Design",
    "Graphic Design",
    "Photoshop"
  ];
  const colors = ["var(--shine)", "var(--blu)", "var(--night)", "var(--tuft)"];

  return (
    <div className="about">
      <Container>
        <Row>
          <Col>
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
          <Col>
            <TextLoop>
              {skills.map((skill) => (
                <div className="skill-list">{skill}</div>
              ))}
            </TextLoop>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
