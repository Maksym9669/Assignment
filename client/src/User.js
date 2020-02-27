import React, { Component } from "react";
import { LineChart } from "react-chartkick";
import "chart.js";

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
      <div>
        <header className="header">AppCo</header>
        <div class="container-fluid">
          {/* <h1>{this.props.match.params.userId}</h1> */}
          {!this.state.data ? null : (
            <div>
              <h1>{this.state.data.credentials}</h1>
              <h1>Clicks</h1>
              <LineChart
                data={serveDataForChart(
                  this.state.data.clicks,
                  this.state.minClicksDate,
                  this.state.maxClicksDate
                )}
              />

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

              <h1>Views</h1>
              <LineChart
                data={serveDataForChart(
                  this.state.data.views,
                  this.state.minViewsDate,
                  this.state.maxViewsDate
                )}
              />

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
          )}
        </div>
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    );
  }
}
