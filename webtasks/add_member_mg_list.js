'use latest';

var request = require('request');

module.exports = function (context, cb) {
  const { address, subscribed = true } = context.data;

  const options = {
    url: `https://api.mailgun.net/v3/lists/${context.secrets.MAILING_LIST}/members`,
    method: 'POST',
    headers: {
      'Authorization': `Basic ${context.secrets.MAIL_GUN_API_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    form: {
      address,
      subscribed
    }
  }

  request(options, function (error, res, body) {
    if(error) {
      cb(error, {success:false, message: "error"});
    } else {
      if(res.statusCode === 200) {
        cb(null, {success: true});
      } else {
        const { message } = JSON.parse(body);
        cb(null, {success:false, message});
      }
    }
  });
};
