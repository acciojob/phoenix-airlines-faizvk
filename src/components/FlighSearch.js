// src/components/FlightSearch.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FlightSearch = () => {
  const history = useHistory();
  const [flight, setFlight] = useState({
    type: "oneway",
    source: "",
    destination: "",
    date: "",
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    if (flight.source && flight.destination && flight.date) {
      // Mock flight availability for Cypress
      const results = [
        `Flight from ${flight.source} to ${flight.destination} on ${flight.date}`,
      ];
      setSearchResults(results);

      history.push({
        pathname: "/flight-booking",
        state: { flight },
      });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div>
      <h1>Welcome to Flight Booking App</h1>

      <div>
        <label>
          <input
            type="radio"
            name="type"
            value="oneway"
            checked={flight.type === "oneway"}
            onChange={handleChange}
          />
          One-way
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="roundtrip"
            checked={flight.type === "roundtrip"}
            onChange={handleChange}
          />
          Round-trip
        </label>
      </div>

      <div>
        <input
          type="text"
          name="source"
          placeholder="Source"
          value={flight.source}
          onChange={handleChange}
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={flight.destination}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={flight.date}
          onChange={handleChange}
        />
      </div>

      <button className="book-flight" onClick={handleSearch}>
        Search Flights
      </button>

      <ul>
        {searchResults.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlightSearch;
