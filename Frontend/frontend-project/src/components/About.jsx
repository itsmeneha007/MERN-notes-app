
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>__About Us__</h2>
          <p>
            At <strong>Foodie</strong>, we’re more than just a restaurant — we’re a family of passionate chefs and food lovers dedicated to creating exceptional meals. Every dish is crafted with fresh, locally-sourced ingredients, and a lot of heart.
          </p>
          <p>
            Whether you're dining in or ordering online, our mission is to deliver delicious food and a memorable experience, every single time.
          </p>
        </div>

        <div className="about-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_nrWBp2l7iEa0qQGO1EtgJaojBE9acJYoQ&s"
            alt="Chef Cooking"
            className="about-img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlA5KAcrOdD83oOcsDKLiEToN_EytzO7E-Pw&s"
            alt="Restaurant Interior"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
