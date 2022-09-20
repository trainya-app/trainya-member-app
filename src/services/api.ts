import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainya-app-api.herokuapp.com/',
  // baseURL: 'http://192.168.15.143:8080/',
});
