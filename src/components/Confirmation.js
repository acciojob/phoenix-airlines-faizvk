// src/components/Confirmation.js
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Confirmation = () => {
  const history = useHistory();
  const location = useLocation();
  const { flight, user } = location.state;

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Flight: {flight.source} → {flight.destination} ({flight.type})
      </p>
      <p>Date: {flight.date}</p>

      <button onClick={() => history.push("/")}>Go to Home</button>
    </div>
  );
};

export default Confirmation;
