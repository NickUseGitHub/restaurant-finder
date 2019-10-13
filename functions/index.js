const functions = require('firebase-functions');
const axios = require('axios');
const configs = require('./configs')

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${configs.channelAccessToken}`
};

exports.helloWorld = functions.region('asia-east2').https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.webhook = functions.region('asia-east2').https.onRequest((request, response) => {
  replyMessage(request)
  response.send("This is webhook!");
});

function replyMessage(req) {
  console.log('hook replyMessage')

  return axios({
    method: 'post',
    url: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    data: {
      replyToken: req.body.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: req.body.events[0].message.text
        }
      ]
    }
  });
}