import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'develop' ? "https://from-the-five-develop.herokuapp.com/api/" : 'http://localhost:8080/api/';
const axiosInstance = axios.create({ baseURL });
const isHandlerEnabled = (config = {}) =>
  config.hasOwnProperty('handlerEnabled') && config.handlerEnabled;

const requestHandler = async (request) => {
  if (isHandlerEnabled(request)) {
    let authUser = JSON.parse(localStorage.getItem('authUser'));
    request.headers['Authorization'] = `Bearer ${authUser.accessToken}`;
  }
  return request;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors
  }
  return Promise.reject(error);
};

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response;
};

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
export default axiosInstance;
