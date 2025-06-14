import "./Qualities.css";

const qualitiesList = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3075/3075977.png",
    title: "Fresh Ingredients",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1823/1823655.png",
    title: "Quality Cooking",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3771/3771346.png",
    title: "Great Ambience",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055687.png",
    title: "Affordable Prices",
  },
];

const Qualities = () => {
  return (
    <section className="qualities-section">
      <h2>** Why Choose Us **</h2>
      <div className="qualities-grid">
        {qualitiesList.map((item, index) => (
          <div className="quality-card" key={index}>
            <img src={item.icon} alt={item.title} className="quality-icon" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
