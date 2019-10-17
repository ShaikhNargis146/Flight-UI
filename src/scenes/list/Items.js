import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import '../../main.css';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingDetails: {}
    };
  }

  render() {
    return Object.keys(this.props.bookingDetails).length > 0 ? (
      <Redirect
        to={{
          pathname: '/booking',
          state: { bookingDetails: this.state.bookingDetails }
        }}
      />
    ) : (
      <div>
        <div>
          <h2>Upcoming Flights</h2>
        </div>
        <div className='table1'>
          <table class='table table-hover table-dark'>
            <thead>
              <tr>
                <th scope='col'>Departure</th>
                <th scope='col'>Arrival</th>
                <th scope='col'>Date of Departure</th>
                <th scope='col'>Date of Arrival</th>
              </tr>
            </thead>
            {this.props.foundFlights.map(uname => (
              <tbody>
                <tr>
                  <td>{uname.departure}</td>
                  <td>{uname.arrival}</td>
                  <td>{uname.departureDate}</td>
                  <td>{uname.arrivalDate}</td>
                  <button
                    type='button'
                    class='btn btn-success'
                    onClick={e => this.props.onclickhandler(uname)}
                  >
                    Book Now
                  </button>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
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
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    onclickhandler: booking =>
      dispatch({ type: 'Booking_Details', booking_details: booking })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
