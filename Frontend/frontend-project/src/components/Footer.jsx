import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>Foodie</h3>
          <p>Deliciousness delivered daily. Taste the best, leave the rest!</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@foodie.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Location: New Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Foodie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
