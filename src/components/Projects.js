/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import colorSharp2 from '../assets/img/color-sharp2.png';
import pokeImg from '../assets/img/project-images/pokedex.png';
import apiImg from '../assets/img/project-images/api.png';
import flixImg from '../assets/img/project-images/appformovies.png';
import meetImg from '../assets/img/project-images/meet.png';
import flixAngularImg from '../assets/img/project-images/angularImg.png';
import chatImg from '../assets/img/project-images/chatUp.png';

export const Projects = () => {
  const frontProjects = [
    {
      title: 'Pokedex App',
      description:
        'Pokedex app is a simple app that lists Pokémons by name and shows their data, Clicking on a Pokémon entry displays more details about the Pokémon. In the app Pokémons can be filtered by their names. All data is loaded from the PokeAPI.',
      imgUrl: pokeImg,
      appUrl: 'https://tktamir.github.io/Pokedex---Tamir-Kahalany/',
    },
    {
      title: 'MyFlix Movies App React',
      description:
        'Client-side for a movies App based on an existing-server side code (REST API and MongoDB database), built with React.',
      imgUrl: flixImg,
      appUrl: 'https://appformovies.netlify.app/',
    },
    {
      title: 'Meet Progressive Web App',
      description:
        'Serverless, Progressive Web App built with React using a test-driven Development (TDD) approach. The App uses the Google Calendar API to fetch upcoming events.',
      imgUrl: meetImg,
      appUrl: 'https://tktamir.github.io/meet/',
    },
    {
      title: 'MyFlix Movies App Angular ',
      description:
        'Client-side for a movies App based on existing server-side code (REST API and MongoDB database) with supporting documentation.',
      imgUrl: flixAngularImg,
      appUrl: 'https://tktamir.github.io/myFlix-Angular-Client/welcome',
    },
  ];

  const backProjects = [
    {
      title: 'Node.js Movies API ',
      description:
        'Server-side component of a movies web application, the API allows users to get data about movies, genres and directors as well as storing favorite movies in the database after signing up. built with Node.js, Express and MongoDB.',
      imgUrl: apiImg,
      appUrl: 'https://appformovies.herokuapp.com/documentation',
    },
  ];

  const nativeProjects = [
    {
      title: 'Chat Native App',
      description:
        'React-Native Chat App developed using Expo, the App provieds users with a chat interface and options to share images and their location.',
      imgUrl: chatImg,
      appUrl: 'https://github.com/TKTamir/chatup',
    },
  ];

  return (
    <section className="projects" id="projects">
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
                          {frontProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        Backend Applications
                        <Row>
                          {backProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        Native Applications
                        <Row>
                          {nativeProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
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
