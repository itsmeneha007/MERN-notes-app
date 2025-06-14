
import "./HeroSection.css"; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to <span>Foodie</span></h1>
        <p>Delicious meals delivered to your doorstep</p>
        <button className="cta-btn">Explore Menu</button>
      </div>
    </section>
  );
};

export default HeroSection;
