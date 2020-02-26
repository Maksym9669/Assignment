import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import MainPage from "./MainPage";
import logo from "./logo.svg";
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
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">React/Redux Express Starter</h1>
            </header>
            {/* <Customers /> */}
            {/* <LineChart data={{ "2017-05-13": 2, "2017-05-14": 5 }} /> */}
            <Switch>
              <Route exact path="/users">
                <Customers />
              </Route>
              <Route path="/users/:userId" component={User}></Route>
              <Route path="/">
                <MainPage></MainPage>
                <button>
                  <Link to="/users">Go to statistics</Link>
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
