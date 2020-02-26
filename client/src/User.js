import React, { Component } from "react";

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
        <h1>User</h1>
        <h1>{this.props.match.params.userId}</h1>
        {!this.state.data ? null : <h1>data is here</h1>}
      </div>
    );
  }
}
