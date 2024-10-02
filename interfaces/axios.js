import axios from "axios";

const http = (apiUrl) => async (path, method, headers, options) => {
  const config = {
    method,
    url: `${apiUrl}${path(options)}`, // Concatenating the API base URL with the dynamic path
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  // If there's a payload, add it to the data field for POST, PUT, PATCH requests
  if (options && options.payload) {
    config.data = options.payload;
  }

  try {
    // Make the request with axios
    const response = await axios(config);
    return response.data; // Axios automatically handles JSON parsing
  } catch (error) {
    // Axios errors provide better error handling, using error.response to get status and data
    if (error.response) {
      console.error(
        `Error during axios request: ${error.response.status}`,
        error.response.data,
      );
      throw new Error(`HTTP error! status: ${error.response.status}`);
    } else {
      console.error("Error during axios request:", error.message);
      throw error;
    }
  }
};

export default http;
