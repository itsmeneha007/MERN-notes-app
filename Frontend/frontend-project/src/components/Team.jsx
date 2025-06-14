import "./Team.css";

const teamMembers = [
  {
    name: "Chef Arjun",
    role: "Head Chef",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_c_RrVg_rOsPMlcKsCeWz0fQoec7foFLAA&s",
  },
  {
    name: "Chef Priya",
    role: "Pastry Chef",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnactO5jte4JujSbyjXjYtX_k1DbcIcpqIMQ&s",
  },
  {
    name: "Anita Sharma",
    role: "Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmCA2iELI6macMK6rIrOyMyRUk2s3hLygAO8XG23xX7wmtI1_IJblyrjkJJzewIRL5IQ&usqp=CAU",
  },
  {
    name: "Ravi Kumar",
    role: "Customer Relations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpiUPTz6d56lbW9STxOfq1Iv3IclgSBO3UlKxI6rBkI6DxTUs6VHeQ4CAmglqqPV123w&usqp=CAU",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>**Our Team**</h2>
      <p>Meet our talented chefs and staff who make the magic happen.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
