// import http from "../interfaces/request.js";
// import http from "../interfaces/axios.js";
import http from "../interfaces/fetch.js";

const addEndpoint =
  (API) =>
  (endpoints, { method, path, name, headers, mapper }) => ({
    [name]: (options) => API(path, method, headers, options, mapper),
    ...endpoints,
  });

const createAPI = (apiUrl, config) =>
  config.reduce(addEndpoint(http(apiUrl)), {});

export default createAPI;
