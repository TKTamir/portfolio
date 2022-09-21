import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/social-icons/nav-icon1.svg';
import navIcon2 from '../assets/img/social-icons/nav-git-icon.svg';
import navIcon3 from '../assets/img/social-icons/nav-twitter-icon.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="blank" href="https://www.linkedin.com/in/tamir-kahalany-6b9baa143">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a target="blank" href="https://github.com/TKTamir">
                <img src={navIcon2} alt="GitHub Icon" />
              </a>
              <a target="blank" href="https://twitter.com/TamirKahalany">
                <img src={navIcon3} alt="Twitter Icon" />
              </a>
            </div>
            <p>CopyRight 2022. All Rights Reserved Tamir Nissim Kahalany</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
