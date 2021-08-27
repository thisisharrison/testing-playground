import "./styles.css";
import Homepage from "./components/Homepage";
import DateCounter3 from "./components/DateCounter3";
import {DateCounter4} from "./components/DateCounter4";
import * as React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {SwitchApp} from "./components/Switch";
import {ContextApp} from "./components/Context";
import {PokemonApp} from "./components/Pokemon";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/date-counter-3" component={DateCounter3} />
          <Route exact path="/date-counter-4" component={DateCounter4} />
          <Route exact path="/controlled-switch" component={() => <SwitchApp controlled={true} />} />
          <Route exact path="/uncontrolled-switch" component={SwitchApp} />
          <Route exact path="/context" component={ContextApp} />
          <Route exact path="/msw" component={PokemonApp} />
        </Switch>
      </Router>
    </div>
  );
}
