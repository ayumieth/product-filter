const axios = require('axios');

const API_URL = 'http://localhost:3035';

const getSearchResult = async (param) => {
  try {
    const res = await axios.get(`${API_URL}/search?name=${param}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export {
  getSearchResult
}