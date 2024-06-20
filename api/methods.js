import { getData, postData, deleteData } from "./fetch.js";

const DEFAULT_ERROR = "Unknown error";

const createEndpointReducer = (accumulator, endpoint) => {
  const { name, url, method, errorMessage = DEFAULT_ERROR, body } = endpoint;

  switch (method) {
    case "GET":
      accumulator[name] = (params) => getData(url, params, errorMessage);
      break;
    case "POST":
      accumulator[name] = () => postData(url, body, errorMessage);
      break;
    case "DELETE":
      accumulator[name] = (params) => deleteData(url, params, errorMessage);
      break;

    default:
      throw new Error(`Unsupported method: ${method}`);
  }
  return accumulator;
};

const methods = (endpoints) => endpoints.reduce(createEndpointReducer, {});

export default methods;
