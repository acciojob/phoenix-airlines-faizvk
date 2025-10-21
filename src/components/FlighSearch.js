// src/components/FlightSearch.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function FlightSearch() {
  const history = useHistory();
  const [flight, setFlight] = useState({
    type: "oneway",
    source: "",
    destination: "",
    date: "",
  });

  const handleChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to booking page with flight details
    history.push("/flight-booking", flight);
  };

  return (
    <div>
      <h1>Flight Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Trip Type:
          <select name="type" value={flight.type} onChange={handleChange}>
            <option value="oneway">One-way</option>
            <option value="roundtrip">Round-trip</option>
          </select>
        </label>
        <br />
        <label>
          Source:
          <input
            type="text"
            name="source"
            value={flight.source}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={flight.destination}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={flight.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="book-flight">
          Book Flight
        </button>
      </form>
    </div>
  );
}

export default FlightSearch;
