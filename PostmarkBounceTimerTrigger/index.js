const dotenv = require('dotenv').config();
const axios = require('axios');

module.exports = async function (context, myTimer) {
  let date = new Date();
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.URL}?code=${process.env.AUTH_CODE}`,
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Language': 'en_US',
      },
    });
    context.log(`Trigger succeeded at ${date}. ${response.data}`);
    return response.data;
  } catch (err) {
    context.log(`Trigger failed at ${date}: ${err}`);
  }
};
