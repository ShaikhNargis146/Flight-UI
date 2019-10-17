import React, { Component } from 'react';
import './main.css';
import Searchflt from './scenes/list/Searchflt';
import Booking from './scenes/booking/booking';
import Payment from './scenes/payment/payment';
import BookingDetail from './scenes/booking/bookingDetails';
import { Provider } from 'react-redux';
import store from './handler/store';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={Searchflt} />
            <Route exact path='/booking' component={Booking} />
            <Route exact path='/payment' component={Payment} />
            <Route exact path='/booking_details' component={BookingDetail} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
