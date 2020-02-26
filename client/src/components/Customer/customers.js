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
import Td from "../../Td";

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
                <tr key={customer.id}>
                  <Td to={`/users/${customer.id}`}>{customer.id} </Td>
                  <Td to={`/users/${customer.id}`}>{customer.first_name}</Td>
                  <Td to={`/users/${customer.id}`}>{customer.last_name}</Td>
                  <Td to={`/users/${customer.id}`}>{customer.email}</Td>
                  <Td to={`/users/${customer.id}`}>{customer.gender}</Td>
                  <Td to={`/users/${customer.id}`}>{customer.address}</Td>
                  <Td to={`/users/${customer.id}`}>{customer.total_clicks}</Td>
                  <Td to={`/users/${customer.id}`}>
                    {customer.total_page_views}
                  </Td>
                </tr>
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
