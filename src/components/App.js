import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FlightSearch from "./FlighSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FlightSearch} />
        <Route exact path="/flight-search" component={FlightSearch} />
        <Route exact path="/flight-booking" component={FlightBooking} />
        <Route exact path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
}

export default App;
