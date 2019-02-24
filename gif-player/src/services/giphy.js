import axios from 'axios';
const apiKey = 'zZxRc8rGU85QuAgxPABLKNqbGZi9xk6p';
const BASE_URL = 'http://api.giphy.com/v1/gifs';

const fetchGif = async () => {
  try {
    const resp = await axios(`${BASE_URL}/search?q=ryan+gosling&api_key=${apiKey}`)
    return resp.data;
  } catch(e) {
    console.log('not working', e);
    return [];
  }
}

export {
  fetchGif
}
