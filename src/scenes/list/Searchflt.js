import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './Items';
import { flightlist, flightSearch } from '../../handler/endpoints';

class Searchflt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionsrc: '',
      selectedOptiondst: '',
      selectedFlights: []
    };
  }

  componentDidMount() {
    const response = flightlist();
    //uncomment when api testing
    // this.props.getFlights(response);
  }

  onInputChangesrc = src => {
    this.setState({ selectedOptionsrc: src.label });
  };

  onInputChangedst = destination => {
    this.setState({ selectedOptiondst: destination.label });
  };

  render() {
    return (
      <div className='searchtab'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <h2>Source:</h2>
            </div>
            <div className='col-md-4'>
              <Select
                options={this.props.techCompanies}
                onChange={e => this.onInputChangesrc(e)}
              />
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <h2>Destination:</h2>
            </div>
            <div className='col-md-4'>
              <Select
                options={this.props.techCompanies}
                onChange={e => this.onInputChangedst(e)}
              />
            </div>
            <button
              className='ui button'
              onClick={e =>
                this.props.onSubmit(
                  this.state.selectedOptionsrc,
                  this.state.selectedOptiondst
                )
              }
            >
              Search Now
            </button>
            <div className='col-md-4'></div>
          </div>
        </div>
        <Items foundFlights={this.props.foundFlights} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    techCompanies: state.techCompanies,
    flightList: state.flights,
    foundFlights:
      state.foundflights.length > 0 ? state.foundflights : state.flights
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    getFlights: flights => {
      dispatch({ type: 'UPDATE_FLIGHT', data: flights });
    },
    //uncomment when api testing
    // onSubmit: (src, dest) => {
    //   const res = flightSearch(src, dest);
    //   dispatch({ type: 'searchList', data: res });
    // },
    onSubmit: (src, dest) => {
      // const res = flightSearch(src, dest);
      dispatch({ type: 'searchList', src: src, dest: dest });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchflt);
