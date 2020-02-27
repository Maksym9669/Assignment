import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import MainPage from "./MainPage";
import logo from "./logo.svg";
import "./styles/style.css";
import "./App.css";
import User from "./User";
import store from "./store";
import Customers from "./components/Customer/customers";
import { LineChart, PieChart } from "react-chartkick";
import "chart.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            {/* <Customers /> */}
            {/* <LineChart data={{ "2017-05-13": 2, "2017-05-14": 5 }} /> */}
            {/* object with date as keys mapped to number of views/clicks */}
            <Switch>
              <Route exact path="/users">
                <Customers />
              </Route>
              <Route path="/users/:userId" component={User}></Route>
              <Route path="/">
                <MainPage></MainPage>
                <button type="button" className="btn btn-light">
                  <Link className="link" to="/users">
                    View Stats
                  </Link>
                </button>
              </Route>
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
