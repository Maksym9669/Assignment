import React, { Component } from "react";
import { LineChart } from "react-chartkick";
import Footer from "./Footer";
import Header from "./Header";
import "chart.js";
import "./styles/style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "./Loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      data: null,
      minViewsDate: null,
      maxViewsDate: null,
      minClicksDate: null,
      maxClicksDate: null
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
    // console.log(this.state.minClicksDate);
  };

  componentDidMount() {
    fetch(`/api/customers/${this.props.match.params.userId}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isFetching: false,
          data: result
        });
      })
      .then(() => console.log(this.state.data))
      .catch(() => console.log("error"));
  }
  render() {
    function serveDataForChart(
      clickOrViewsObject = {},
      startDate = "",
      endDate = ""
    ) {
      let result = { ...clickOrViewsObject };
      if (!startDate || !endDate) {
        let defaultNumberOfDays = 7;
        for (let key in result) {
          if (defaultNumberOfDays <= 0) {
            delete result[key];
          }
          defaultNumberOfDays--;
        }
      } else {
        for (let key in result) {
          if (key < startDate || key > endDate) delete result[key];
        }
      }
      return result;
    }

    return (
      <div style={{ height: "100%" }}>
        <Header></Header>
        {/* <div class="container"> */}
        {/* <h1>{this.props.match.params.userId}</h1> */}
        {!this.state.data ? (
          <Loader></Loader>
        ) : (
          <div>
            <div class="container">
              <div className="row">
                <p>
                  <Link className="link" to={"/"}>
                    Main page >
                  </Link>{" "}
                  <Link className="link" to={"/users/"}>
                    User statistics >
                  </Link>{" "}
                  <span className="font-styled-3">
                    {this.state.data.credentials}
                  </span>
                </p>
              </div>
              <div className="row">
                <h2 className="font-styled">{this.state.data.credentials}</h2>
              </div>
              <div className="row">
                <h3 className="font-styled-2">Clicks</h3>
              </div>
              <div className="row">
                {/* <h1>{this.state.data.credentials}</h1>
              <h1>Clicks</h1> */}
                <LineChart
                  data={serveDataForChart(
                    this.state.data.clicks,
                    this.state.minClicksDate,
                    this.state.maxClicksDate
                  )}
                />
              </div>
              <input
                type="text"
                name="minClicksDate"
                value={this.state.minClicksDate || ""}
                onChange={e => {
                  this.handleInputChange(e);
                }}
                placeholder={
                  "Min value: " + this.state.data.dates.minDateClicks
                }
              />
              <input
                type="text"
                name="maxClicksDate"
                value={this.state.maxClicksDate || ""}
                onChange={e => {
                  this.handleInputChange(e);
                }}
                placeholder={
                  "Max value: " + this.state.data.dates.maxDateClicks
                }
              />
              <div className="row">
                <h3 className="font-styled-2">Views</h3>
              </div>
              <div className="row">
                <LineChart
                  data={serveDataForChart(
                    this.state.data.views,
                    this.state.minViewsDate,
                    this.state.maxViewsDate
                  )}
                />
              </div>
              <input
                type="text"
                name="minViewsDate"
                value={this.state.minViewsDate || ""}
                onChange={e => {
                  this.handleInputChange(e);
                }}
                placeholder={"Min value: " + this.state.data.dates.minDateViews}
              />
              <input
                type="text"
                name="maxViewsDate"
                value={this.state.maxViewsDate || ""}
                onChange={e => {
                  this.handleInputChange(e);
                }}
                placeholder={"Max value: " + this.state.data.dates.maxDateViews}
              />
            </div>
            <Footer></Footer>
          </div>
        )}
        {/* </div> */}
      </div>
    );
  }
}
