//imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./src/components/main";
import NavBar from "./src/components/nevigation/NavBar";

//class declaretion and inherit from the react
export default class App extends React.Component {
  render() {
    return (
      //set main routing for base url
      <Router>
        <Switch>
          <Route path="/">
            <NavBar />
            <Main />
          </Route>
        </Switch>
      </Router>
    );
  }
}
