const createEndpointReducer = (accumulator, endpoint) => {
  const { name, url, method, errorMessage } = endpoint;
  accumulator[name] = (params) => method(url, params, errorMessage);
  return accumulator;
};

const methods = (endpoints) => endpoints.reduce(createEndpointReducer, {});

console.log(methods);

export default methods;
