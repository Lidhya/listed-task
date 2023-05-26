import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://public-api.cyclic.app/api'
});

export default instance;
