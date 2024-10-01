// import http from "../interfaces/axios.js";
import http from "../interfaces/fetch.js";

const createEndpoint =
  (API) =>
  (acc, { method, path, name, headers }) => {
    acc[name] = (options) => API(path, method, headers)(options);
    return acc;
  };

const createAPI = (apiUrl, config) =>
  config.reduce(createEndpoint(http(apiUrl)), {});

export default createAPI;
