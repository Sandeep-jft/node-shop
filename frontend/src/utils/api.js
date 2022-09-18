import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = (token = null) => {
  const axiosRequest = axios.create({
    baseURL,
    timeout: 5000,
  });

  if (token !== null) {
    axiosRequest.interceptors.request.use(function (request) {
      request.headers["Content-Type"] = "application/json";
      request.headers['Access-Control-Allow-Origin'] = baseURL;
      return request;
    });
  } else {
    axiosRequest.interceptors.request.use(function (request) {
      request.headers["Content-Type"] = "application/json";
      request.headers['Access-Control-Allow-Origin'] = baseURL;
      return request;
    });
  }
  return axiosRequest;
};

export { axiosInstance };
