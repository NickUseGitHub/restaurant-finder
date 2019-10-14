const functions = require('firebase-functions');
const axios = require('axios');
const configs = require('./configs');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${configs.channelAccessToken}`,
};
const GOOGLE_MAP_API =
  'https://maps.googleapis.com/maps/api/place/nearbysearch';

exports.getRestaurants = functions
  .region('asia-east2')
  .https.onRequest(async (request, response) => {
    const restaurants = await findRestaurants();
    response.json(restaurants);
  });

exports.webhook = functions
  .region('asia-east2')
  .https.onRequest(async (request, response) => {
    const restaurants = await findRestaurants();
    replyMessage(request, restaurants);
    response.send('This is webhook!');
  });

function transformRestaurantIntoCarousel(restaurant) {
  return {
    thumbnailImageUrl: 'https://picsum.photos/200/150?random=1',
    imageBackgroundColor: '#FFFFFF',
    title: restaurant.name,
    text: restaurant.name,
    defaultAction: {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123',
    },
    actions: [
      {
        type: 'postback',
        label: 'Buy',
        data: 'action=buy&itemid=111',
      },
      {
        type: 'postback',
        label: 'Add to cart',
        data: 'action=add&itemid=111',
      },
      {
        type: 'uri',
        label: 'View detail',
        uri: 'http://example.com/page/111',
      },
    ],
  };
}

function filterCloseRestaurant(restaurant) {
  return (
    restaurant &&
    restaurant.opening_hours &&
    restaurant.opening_hours.open_now === true
  );
}

function replyMessage(req, restaurants) {
  return axios({
    method: 'post',
    url: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    data: {
      replyToken: req.body.events[0].replyToken,
      messages: [
        {
          type: 'template',
          altText: 'ร้านอาหารใกล้เคียงบางซื่อจ้า',
          template: {
            type: 'carousel',
            columns: restaurants
              .filter(filterCloseRestaurant)
              .slice(0, 4)
              .map(transformRestaurantIntoCarousel),
            imageAspectRatio: 'rectangle',
            imageSize: 'cover',
          },
        },
      ],
    },
  });
}

function findRestaurants() {
  return axios({
    method: 'get',
    url: `${GOOGLE_MAP_API}/json`,
    params: {
      key: configs.googleApiKey,
      radius: 2000,
      location: '13.8028689,100.5348654',
      type: 'restaurant',
    },
  }).then(response => {
    return response.data.results;
  });
}
