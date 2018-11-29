require('dotenv').config();
const axios = require('axios');

const uri = `http://api.themoviedb.org/3/trending/tv/day?api_key=${
  process.env.API_KEY
}`;

module.exports.getList = async (event, context) => {
  let result = await axios.get(uri);
  return {
    statusCode: 200,
    body: JSON.stringify({
      ...result.data
    })
  };
};
