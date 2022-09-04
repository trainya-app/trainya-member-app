import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainya-app-api.herokuapp.com/',
});
