import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCustomers } from "../../store/actions/customer";
import "./customers.css";

class Customers extends Component {
  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
  };

  static defaultProps = {
    customers: []
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
          {this.props.customers.map(customer => (
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
          ))}
        </table>
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
