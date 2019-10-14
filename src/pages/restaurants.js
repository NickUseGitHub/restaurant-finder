import React from 'react';
import axios from 'axios';
import get from 'lodash/get';
import Restaurants from '../components/restaurant/Restaurants';

Restaurants.getInitialProps = async ({ req }) => {
  const result = await axios({
    method: 'get',
    url: `${process.env.GRAPH_URL}:${process.env.GRAPH_PORT}/api`,
    params: {
      query: `
      {
        restaurants {
          name
          isOpenNow
          address
          rating
        }
      }
      `,
    },
  });

  const restaurants = get(result, 'data.data.restaurants') || [];

  return { restaurants };
};

export default Restaurants;
