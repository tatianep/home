import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        {/* Wrap the image with an anchor tag that redirects to the company's website */}
        <a href={data.companyUrl} target="_blank" rel="noopener noreferrer">
          <img className="bg-white mb-3" src={data.companylogo} alt={data.companyName} style={{ cursor: 'pointer' }} />
        </a>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;
