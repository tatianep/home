import React from "react";
import { Jumbotron } from "./migration";

const Awards = ({ awards }) => {
  return (
    <Jumbotron
      id="awards"
      className="m-0 text-center" 
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">Awards</h2>
      <div className="container">
        {awards.map((award, index) => (
          <div key={index} className="pb-4">
            <h3>{award.title}</h3>
            <p><strong>{award.institution}</strong> - {award.place}</p>
          </div>
        ))}
      </div>
    </Jumbotron>
  );
};

export default Awards;
