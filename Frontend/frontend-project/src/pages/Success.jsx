import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const chefs = [
  {
    name: "Chef Aish",
    image: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
    specialty: "Italian Cuisine",
  },
  {
    name: "Chef Radhav",
    image: "https://cdn-icons-png.flaticon.com/512/706/706797.png",
    specialty: "Indian Spices",
  },
  {
    name: "Chef Alex",
    image: "https://cdn-icons-png.flaticon.com/512/706/706816.png",
    specialty: "French Pastries",
  },
];

const Success = () => {
  return (
    <section className="success-page">
      <div className="thank-you">
        <h1>Thank You for Your Reservation!</h1>
        <p>Your table is booked. We can’t wait to serve you delicious meals.</p>
      </div>

      <div className="about-restaurant">
        <h2>About Foodie Restaurant</h2>
        <p>
          At Foodie, we combine passion with quality. Our mission is to serve
          fresh, flavorful meals made with love and the best ingredients.
        </p>
        <p>
          Whether you're here for a casual lunch or a special dinner, our chefs
          and staff are dedicated to giving you an unforgettable dining
          experience.
        </p>
      </div>

      <div className="our-chefs">
        <h2>Meet Our Chefs</h2>
        <div className="chef-list">
          {chefs.map((chef, index) => (
            <div className="chef-card" key={index}>
              <img src={chef.image} alt={chef.name} />
              <h3>{chef.name}</h3>
              <p>{chef.specialty}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="back-home">
        <Link to="/" className="home-btn">← Back to Home</Link>
      </div>
    </section>
  );
};

export default Success;
