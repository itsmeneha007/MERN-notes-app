
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; 

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="notfound-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Not Found"
          className="notfound-image"
        />
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="home-button">Go to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
