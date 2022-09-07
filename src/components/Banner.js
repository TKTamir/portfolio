import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded`}
              <span className="wrap"> web developer</span>
            </h1>
            <p>
              Lorem ipsum loren ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum loren ipsum
              lorem ipsum lorem ipsum lorem ipsum
            </p>
            <button onClick={() => console.log('connect')}>Let's Connect</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={} alt="Header IMG"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
