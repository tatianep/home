import React, { useState } from "react";
import { Jumbotron } from "./migration";

const PublicationItem = ({ publication }) => {
  const [showFullAbstract, setShowFullAbstract] = useState(false);

  const toggleAbstract = () => {
    setShowFullAbstract(!showFullAbstract);
  };

  const renderAbstract = (text) => {
    if (showFullAbstract) return text;
    return `${text.substring(0, 150)}... `; // Adjust 200 to the desired number of characters
  };

  return (
    <div className="pb-4">
      <h3>{publication.title}</h3>
      <p>
        <strong>Abstract:</strong> {renderAbstract(publication.description)}
        <button className="btn btn-link p-0 align-baseline" onClick={toggleAbstract}>
          {showFullAbstract ? "read less" : "read more"}
        </button>
      </p>
      <p><strong>Authors:</strong> {publication.authors}</p>
      <a href={publication.link} target="_blank" rel="noopener noreferrer">{publication.link_title}</a>
    </div>
  );
};

const Publications = ({ publications }) => {
  return (
    <Jumbotron
      id="publications"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">Publications</h2>
      <div className="container">
        {publications.map((publication, index) => (
          <PublicationItem key={index} publication={publication} />
        ))}
      </div>
    </Jumbotron>
  );
};

export default Publications;
