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
        <div>Source: {this.props.bookingDetails.departure}</div>
        <div>Destination: {this.props.bookingDetails.arrival} </div>
        <div>Flight Arrival:{this.props.bookingDetails.arrivalDate} </div>
        <div>Flight Departure: {this.props.bookingDetails.departureDate}</div>
        <div>
          Flight Journey:{' '}
          {this.props.bookingDetails.arrivalDate -
            this.props.bookingDetails.departureDate}
        </div>
        <div>Pnr: WQPHV</div>
        <div>Date of Journey:{date}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookingDetails: state.bookingDetails
  };
};
export default connect(
  mapStateToProps,
  null
)(bookingDetails);
