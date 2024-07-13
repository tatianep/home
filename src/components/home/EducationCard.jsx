import React from 'react';
import { Col} from "react-bootstrap";

const EducationCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        {/* Wrap the image with an anchor tag that redirects to the school's website */}
        <a href={data.schoolUrl} target="_blank" rel="noopener noreferrer">
          <img className="bg-white mb-3" src={data.schoolLogo} alt={data.schoolName} style={{ cursor: 'pointer' }} />
        </a>
        <p className="lead">
          {data.degree} in {data.field}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
}

export default EducationCard;