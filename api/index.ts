import axios from 'axios';

const _axios = axios.create({ baseURL: '/api' });

_axios.interceptors.response.use(
  (response) => response.data, //
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);