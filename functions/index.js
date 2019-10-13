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
  .https.onRequest((request, response) => {
    replyMessage(request);
    response.send('This is webhook!');
  });

function replyMessage(req) {
  console.log('hook replyMessage');

  return axios({
    method: 'post',
    url: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    data: {
      replyToken: req.body.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: req.body.events[0].message.text,
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
      location: '-33.8670522,151.1957362',
      type: 'restaurant',
    },
  }).then(response => {
    return response.data.results;
  });
}
