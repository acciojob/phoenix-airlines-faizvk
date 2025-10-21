// src/components/FlightBooking.js
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const FlightBooking = () => {
  const history = useHistory();
  const location = useLocation();
  const { flight } = location.state;

  const [user, setUser] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!user.name || !user.email || !user.phone) {
      alert("Please fill all details!");
      return;
    }
    history.push({
      pathname: "/confirmation",
      state: { flight, user },
    });
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={user.phone}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;
