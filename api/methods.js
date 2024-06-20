const createEndpointReducer = (accumulator, endpoint) => {
  const { name, url, method, errorMessage } = endpoint;
  accumulator[name] = () => method(url, errorMessage);
  return accumulator;
};

const methods = (endpoints) => endpoints.reduce(createEndpointReducer, {});

export default methods;
