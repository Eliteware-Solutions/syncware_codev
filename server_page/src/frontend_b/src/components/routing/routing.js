import React, { Component } from "react";
import Theme from "../Theme/Theme";
import LoginPage from "../login/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

export default class RoutingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/theme" component={Theme} />
        </Switch>
      </BrowserRouter>
    );
  }
}
