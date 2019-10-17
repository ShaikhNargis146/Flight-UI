const initState = {
  flights: [
    {
      id: 1,
      departure: 'Mumbai',
      arrival: 'Hydrabad',
      departureDate: '2019-10-16T13:17:17',
      arrivalDate: '2019-10-16T14:17:17'
    },
    {
      id: 1,
      departure: 'Mumbai',
      arrival: 'Delhi',
      departureDate: '2019-10-16T13:17:17',
      arrivalDate: '2019-10-16T14:17:17'
    }
  ],
  techCompanies: [
    { label: 'Mumbai', value: 1 },
    { label: 'Delhi', value: 2 },
    { label: 'Goa', value: 3 },
    { label: 'Dubai', value: 4 },
    { label: 'Jeddah', value: 5 },
    { label: 'Riyadh', value: 6 }
  ],
  foundflights: [],
  bookingDetails: {}
};
const reducer = (state = initState, action) => {
  if (action.type === 'searchList') {
    // const flights_Selected = action.data; uncomment when api testing
    const flights_Selected = state.flights.filter(
      flight => flight.departure == action.src && flight.arrival == action.dest
    );
    // state.foundflights = flights_Selected;
    return { ...state, foundflights: flights_Selected };
  } else if (action.type === 'UPDATE_FLIGHT') {
    return { ...state, flights: action.data };
  } else if (action.type === 'Booking_Details') {
    return { ...state, bookingDetails: action.booking_details };
  } else if (action.type === 'bookingSuccess') {
    return { ...state, bookingDetails: action.booking_details };
  } else {
    return state;
  }
};

export default reducer;
