import "./Menu.css";

const menuItems = [
  {
    name: "Pizza",
    image: "https://img.freepik.com/free-photo/pizza-pepperoni-with-cheese_140725-5126.jpg",
    price: "$12.99",
    description: "Wood-fired pizza topped with mozzarella and pepperoni."
  },
  {
    name: "Burger",
    image: "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg",
    price: "$9.49",
    description: "Juicy grilled burger with crispy lettuce and cheddar cheese."
  },
  {
    name: "Fruits",
    image: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-white-plate_1220-6131.jpg",
    price: "$10.25",
    description: "Classic Italian pasta tossed in rich tomato sauce."
  },
  {
    name: "Salad",
    image: "https://b.zmtcdn.com/data/dish_photos/1c3/731879913e26b95e31cdcf225ec071c3.jpg?output-format=webp",
    price: "$7.75",
    description: "Fresh garden salad with a choice of dressings."
  }
];

const Menu = () => {
  return (
    <section className="menu-section">
      <h2 className="menu-title">--- Our Menu ---</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
