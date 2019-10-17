import React, { Component } from 'react';
import { connect } from 'react-redux';

export class bookingDetails extends Component {
  render() {
    let date = new Date().toLocaleString();
    return (
      <div>
        <div>Name: {this.props.bookingDetails.name}</div>
        <div>Email: {this.props.bookingDetails.email}</div>
        <div>Mobile: {this.props.bookingDetails.mobile}</div>
        <div>Source: {this.props.bookingDetails.from}</div>
        <div>Destination: {this.props.bookingDetails.to} </div>
        <div>Flight Arrival:{'8:30'} </div>
        <div>Flight Departure: {'9:10'}</div>
        <div>Flight Journey: {this.props.bookingDetails.time}</div>
        <div>Pnr: WQPHV</div>
        <div>Date of Journey:{date}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state----------details', state);
  return {
    bookingDetails: state.bookingDetails
  };
};
export default connect(
  mapStateToProps,
  null
)(bookingDetails);
