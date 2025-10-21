// src/components/Confirmation.js
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function Confirmation() {
  const history = useHistory();
  const location = useLocation();
  const { flight, passenger } = location.state;

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Trip Type: {flight.type}</p>
      <p>
        From {flight.source} to {flight.destination} on {flight.date}
      </p>
      <p>Name: {passenger.name}</p>
      <p>Email: {passenger.email}</p>
      <p>Phone: {passenger.phone}</p>
      <button onClick={() => history.push("/")}>Back to Home</button>
    </div>
  );
}

export default Confirmation;
