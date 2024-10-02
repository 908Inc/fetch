import request from "request";

const http = (apiUrl) => async (path, method, headers, options, mapper) => {
  return new Promise((resolve, reject) => {
    const dynamicPath = path(options);
    const url = `${apiUrl}${dynamicPath}`;

    const config = {
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    // If there's a payload, add it to the body
    if (options && options.payload) {
      config.body = JSON.stringify(options.payload);
    }

    // Make the request
    request(config, (error, response, body) => {
      if (error) {
        reject(new Error(`Request error: ${error.message}`));
        // eslint-disable-next-line no-magic-numbers
      } else if (response.statusCode >= 200 && response.statusCode < 300) {
        try {
          const data = JSON.parse(body);
          resolve(mapper ? mapper(data) : data);
        } catch (err) {
          reject(new Error("Failed to parse response JSON"));
        }
      } else {
        reject(new Error(`HTTP error! status: ${response.statusCode}`));
      }
    });
  });
};

export default http;
