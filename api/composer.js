import { getData, postData, deleteData } from "./fetch.js";

const DEFAULT_ERROR = "Unknown error";

const createEndpointReducer = (accumulator, endpoint) => {
  const { name, url, method, errorMessage = DEFAULT_ERROR, body } = endpoint;

  const methodHandlers = {
    GET: (params) => getData(url, params, errorMessage),
    POST: () => postData(url, body, errorMessage),
    DELETE: (params) => deleteData(url, params, errorMessage),
  };

  accumulator[name] = methodHandlers[method];

  return accumulator;
};

const methods = (endpoints) => endpoints.reduce(createEndpointReducer, {});

export default methods;
