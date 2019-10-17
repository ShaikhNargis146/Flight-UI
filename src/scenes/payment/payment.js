import React from 'react';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      bookingDetails: props.location.state.bookingDetails
    };
  }

  onSubmit(event, bookingDetails) {
    event.preventDefault();
    //add payment api save here
    if (bookingDetails.departure && bookingDetails.arrival)
      this.setState({ isSubmit: true });
  }

  render() {
    return this.state.isSubmit == true ? (
      <Redirect
        to={{
          pathname: '/booking_details',
          state: { bookingDetails: this.props.bookingDetails }
        }}
      />
    ) : (
      <form
        className='form-group'
        onSubmit={e => this.onSubmit(e, this.state.bookingDetails)}
      >
        <div className='form-group'>
          <label>Card Number:</label>
          <input
            type='text'
            className='form-control'
            id='cardNumber'
            placeholder='Card Number'
          />
        </div>
        <div className='form-group'>
          <label>Card Holder:</label>
          <input
            type='text'
            className='form-control'
            id='cardHolder'
            placeholder='Name On Card'
          />
        </div>
        <div className='row form-group'>
          <div className='col-6'>
            <label>Expiry:</label>
            <input
              type='text'
              className='form-control'
              id='expiry'
              placeholder='EXPIRY'
            />
          </div>
          <div className='col-6'>
            <label>CVV:</label>
            <input
              type='password'
              className='form-control'
              id='cvv'
              placeholder='CVV'
            />
          </div>
        </div>
        <button type='submit' className='btn btn-primary proceedButton'>
          Make Payment
        </button>
      </form>
    );
  }
}

export default PaymentForm;
