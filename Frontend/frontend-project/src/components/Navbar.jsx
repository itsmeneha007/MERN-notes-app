
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const logo = "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png";
const searchIcon = "https://cdn-icons-png.flaticon.com/128/151/151773.png";
const cartIcon = "https://cdn-icons-png.flaticon.com/128/5713/5713065.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Foodie Logo" className="logo" />
          <h2 className="brand-title">Foodie</h2>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="add-note">Add Note</Link></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#reservation">Contact</a></li>
          <li><Link to="/success">Success</Link></li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="shopping-cart">
          <img src={cartIcon} alt="Cart" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;













// src 
//  |
//  |--- components
//  |        |-- About.jsx 
//  |        |-- Footer.jsx
//  |        |-- HeroSection.jsx
//  |        |-- Menu.jsx
//  |        |--Navbar.jsx
//  |        | -- Qualities.jsx
//  |        |-- Reservation.jsx
//  |        |-- Team.jsx|
//  |
//  |
//  |--- pages
//  |      |--Home.jsx
//  |      |--NotFound.jsx
//  |      |--Success.jsx
//  |
//  |
//  |---App.jsx
//  |---main.jsx
//  |---App.css 
//  |---index.css






// Backend 
//   |
//   |----confing
//   |      |__ debugger.js
//   |
//   |----controllers
//   |      |__authControllers.js
//   |      |
//   |      |__authControllers.js
//   |
//   |----middleware
//   |     |__authMiddleware.js
//   |
//   |----models
//   |     |__Note.js
//   |     |__User.js
//   |
//   |----node_modules
//   |----routes 
//   |     |__authRoutes.js
//   |     |__noteRoutes.js
//   |
//   |__.env
//   |__server.js
