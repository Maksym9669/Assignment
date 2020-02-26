import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCustomers } from "../../store/actions/customer";
import "./customers.css";

function User(props) {
  return (
    <div>
      <h1>User</h1>
      <h1>{props.match.params.userId}</h1>
    </div>
  );
}

class Customers extends Component {
  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.object.isRequired
  };

  static defaultProps = {
    customers: {}
  };

  componentWillMount() {
    this.props.getCustomers();
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <table>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Ip address</th>
            <th>Clicks count</th>
            <th>Views count</th>
          </tr>

          {this.props.customers.results
            ? this.props.customers.results.map(customer => (
                <Link to={`/users/${customer.id}`}>
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.first_name}</td>
                    <td>{customer.last_name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.ip_address}</td>
                    <td>{customer.total_clicks}</td>
                    <td>{customer.total_page_views}</td>
                    <td>{customer.cha}</td>
                  </tr>
                </Link>
              ))
            : null}
        </table>

        <Route path="/users/:userId" component={User}></Route>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customers
});

const dispatchToProps = dispatch => ({
  getCustomers: () => dispatch(getCustomers())
});

export default connect(mapStateToProps, dispatchToProps)(Customers);
