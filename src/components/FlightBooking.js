// src/components/FlightBooking.js
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function FlightBooking() {
  const history = useHistory();
  const location = useLocation();
  const flight = location.state;

  const [passenger, setPassenger] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/confirmation", { flight, passenger });
  };

  return (
    <div>
      <h1>Flight Booking</h1>
      <p>Trip Type: {flight.type}</p>
      <p>
        From {flight.source} to {flight.destination} on {flight.date}
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={passenger.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={passenger.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={passenger.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default FlightBooking;
