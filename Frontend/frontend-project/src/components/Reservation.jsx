
import { useState } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name}!`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
    });
  };

  return (
    <section className="reservation-section">
      <h2><i>-- Make a Reservation --</i></h2>
      <p>Book your table by filling out the form below</p>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
        />
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          required
          value={formData.guests}
          onChange={handleChange}
        />
        <button type="submit">Book Table</button>
      </form>
    </section>
  );
};

export default Reservation;
