/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Pokedex App',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'React Movies App',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Chat Native App',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Meet Progressive Web App',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Angular Movies App',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Node.js Movies API ',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                  <h2>Projects</h2>
                  <p>Here you can check out some of the projects I've completed</p>

                  <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        Backend
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">Frontend</Tab.Pane>
                      <Tab.Pane eventKey="third">Native</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background-image" />
    </section>
  );
};
