import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Publications = ({ heading, publications }) => {
  return (
    <Jumbotron
      id="publications"  // Change the ID for the Jumbotron
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <Carousel>
            {publications.map((pub, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={pub.imgSrc}  // Assume each publication might have an associated image
                    alt={`Slide ${index}`}
                    width="100%"  // Adjust image size if needed
                  />
                  <Carousel.Caption>
                    <h3>{pub.title}</h3>
                    <p>{pub.summary}</p>  // Summary of the publication
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Publications;
