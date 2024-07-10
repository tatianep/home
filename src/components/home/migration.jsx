import React from 'react';
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom'; // Import if not already imported

export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">
        {props.children}
      </div>
    </div>
  );
}

export const NavLink = ({ href, onClick, children, className, target, rel, to, external }) => {
  if (external) {
    return (
      <Nav.Link href={href} target={target} rel={rel} className={`nav-item lead ${className}`}>
        {children}
      </Nav.Link>
    );
  } else {

    return (
      <Nav.Link
        href={href} // Keeping href for valid HTML but preventing default behavior
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor link behavior
          onClick(); // Execute the passed onClick function
        }}
        className={`nav-item lead ${className}`}
        target={target}
        rel={rel}
      >
        {children}
      </Nav.Link>
    );
  }
};