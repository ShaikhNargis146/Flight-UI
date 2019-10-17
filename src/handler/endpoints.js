import axios from 'axios';

export const flightlist = () => {
  axios
    .get('/flights')
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const flightSearch = (src, dest) => {
  axios
    .get(`/flights/${src}/${dest}`)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
};
