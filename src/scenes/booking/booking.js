import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookingForm from './bookingForm';

export class Booking extends Component {
  render() {
    return (
      <div>
        <BookingForm bookingDetails={this.props.bookingDetails} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state-in item---------', state);
  return {
    bookingDetails: state.bookingDetails
  };
};

export default connect(
  mapStateToProps,
  null
)(Booking);
