/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import colorSharp2 from '../assets/img/color-sharp2.png';
import portfolioImg from '../assets/img/project-images/portfolio.png';
import pokeImg from '../assets/img/project-images/pokedex.png';
import apiImg from '../assets/img/project-images/api.png';
import flixImg from '../assets/img/project-images/appformovies.png';
import meetImg from '../assets/img/project-images/meet.png';
import flixAngularImg from '../assets/img/project-images/angularImg.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Pokedex App',
      description:
        'Portfolio website built with HTML and CSS3, the website includes a contact form and an SVG animation.',
      imgUrl: portfolioImg,
    },
    {
      title: 'React Movies App',
      description:
        'Pokedex app is a simple app that lists Pokémons by name and shows their data, Clicking on a Pokémon entry displays more details about the Pokémon. In the app Pokémons can be filtered by their names. All data is loaded from the PokeAPI.',
      imgUrl: pokeImg,
    },
    {
      title: 'Chat Native App',
      description: 'Design & Development',
      imgUrl: apiImg,
    },
    {
      title: 'Meet Progressive Web App',
      description: 'Design & Development',
      imgUrl: flixImg,
    },
    {
      title: 'Angular Movies App',
      description: 'Design & Development',
      imgUrl: meetImg,
    },
    {
      title: 'Node.js Movies API ',
      description:
        'Server-side component of a movies web application, the API allows users to get data about movies, genres and directors as well as storing favorite movies in the database after signing up. built with Node.js, Express and MongoDB.',
      imgUrl: flixAngularImg,
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
                  <p>Here you can check out some of the projects I've created</p>

                  <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Backend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Native</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        Frontend Applications
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">Backend Applications</Tab.Pane>
                      <Tab.Pane eventKey="third">Native Applications</Tab.Pane>
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
