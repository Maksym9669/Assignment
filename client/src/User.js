import React, { Component } from "react";
import { LineChart } from "react-chartkick";
import "chart.js";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      data: null
    };
  }
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
    return (
      <div>
        {/* <h1>{this.props.match.params.userId}</h1> */}
        {!this.state.data ? null : (
          <div>
            <h1>{this.state.data.credentials}</h1>
            <h1>Clicks</h1>
            <LineChart data={this.state.data.clicks} />
            <input
              type="text"
              placeholder={"Min value: " + this.state.data.dates.minDateClicks}
            />
            <input
              type="text"
              placeholder={"Max value: " + this.state.data.dates.maxDateClicks}
            />
            <h1>Views</h1>
            <LineChart data={this.state.data.views} />
            <input
              type="text"
              placeholder={"Min value: " + this.state.data.dates.minDateViews}
            />
            <input
              type="text"
              placeholder={"Max value: " + this.state.data.dates.maxDateViews}
            />
            <h1>{JSON.stringify(this.state.data.clicks)}</h1>
            <h1>{JSON.stringify(this.state.data.views)}</h1>
          </div>
        )}
      </div>
    );
  }
}
