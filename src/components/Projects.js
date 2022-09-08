import { Container, Col, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assests/img/color-sharp2.png';

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
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem
            </p>
            <Tab.Continaer id="project-tabs" defaultActiveKey="first">
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
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum2</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum3</Tab.Pane>
              </Tab.Content>
            </Tab.Continaer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
