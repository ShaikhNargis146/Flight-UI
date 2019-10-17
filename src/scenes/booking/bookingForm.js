import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import '../../main.css';

export class bookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: this.props.bookingDetails,
      name: '',
      email: '',
      mobile: '',
      isSubmit: false
    };
  }

  onInputChange = eee => {
    this.setState({ [eee.target.name]: eee.target.value });
  };

  onSub = e => {
    this.state.booking.name = this.state.name;
    this.state.booking.email = this.state.email;
    this.state.booking.mobile = this.state.mobile;

    this.props.onSubmit(this.state.booking);
    if (
      this.props.bookingDetails.name != '' &&
      this.props.bookingDetails.email != '' &&
      this.props.bookingDetails.mobile != ''
    )
      this.setState({ isSubmit: true });
  };

  render() {
    return this.state.isSubmit == true ? (
      <Redirect
        to={{
          pathname: '/payment',
          state: { bookingDetails: this.props.bookingDetails }
        }}
      />
    ) : (
      <form className='form-group'>
        <div className='form-group'>
          <label>Name:</label>
          <input
            type='name'
            className='form-control'
            id='name'
            value={this.state.name}
            name='name'
            onChange={e => this.onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={this.state.email}
            name='email'
            onChange={e => this.onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Mobile Number:</label>
          <input
            type='number'
            className='form-control'
            id='mobile_number'
            value={this.state.mobile}
            name='mobile'
            onChange={e => this.onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Source:</label>
          <input
            type='text'
            className='form-control'
            id='source'
            value={this.props.bookingDetails.departure}
          />
        </div>
        <div className='form-group'>
          <label>Destination:</label>
          <input
            type='text'
            className='form-control'
            id='from'
            value={this.props.bookingDetails.arrival}
          />
        </div>
        <button
          type='button'
          className='btn btn-primary proceedButton'
          onClick={e => this.onSub(e)}
        >
          Proceed
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    bookingDetails: state.bookingDetails
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    onSubmit: booking => {
      //add post api here
      dispatch({ type: 'bookingSuccess', booking_details: booking });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(bookingForm);
