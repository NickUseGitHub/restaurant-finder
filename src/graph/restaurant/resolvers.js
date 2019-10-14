const axios = require('axios');
const get = require('lodash/get');

module.exports = {
  Query: {
    async restaurants() {
      return axios({
        method: 'get',
        url: `${process.env.API_URL}/getRestaurants`,
      })
        .then(function(response) {
          return response.data;
        })
        .then(function validateEachRestaurant(restaurants) {
          return restaurants.map(function tranformRestaurant(restaurant) {
            return {
              name: get(restaurant, 'name'),
              isOpenNow: get(restaurant, 'opening_hours.open_now') || false,
              address: get(restaurant, 'vicinity'),
              rating: get(restaurant, 'rating'),
            };
          });
        });
    },
  },
};
