/* eslint-disable jsx-a11y/img-redundant-alt */
import { Col } from 'react-bootstrap';
export const ProjectCard = ({ title, description, imgUrl, appUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project-Image" className="project-img" />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="project-url">
        <a href={appUrl}>Open</a>
      </div>
    </Col>
  );
};
