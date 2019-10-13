const axios = require('axios');

module.exports = {
  Query: {
    async restaurants() {
      return axios({
        method: 'get',
        url: `${process.env.API_URL}/getRestaurants`,
      }).then(response => {
        return response.data;
      });
    },
  },
};
