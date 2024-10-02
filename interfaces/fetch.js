const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

const http = (apiUrl) => async (path, method, headers, options) => {
  const config = {
    method,
    headers: {
      ...DEFAULT_HEADERS,
      ...headers,
    },
  };

  if (options && options.payload) {
    config.body = JSON.stringify(options.payload);
  }

  const dynamicPath = path(options);

  try {
    const response = await fetch(`${apiUrl}${dynamicPath}`, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error during fetch:", error.message);
    throw error;
  }
};

export default http;
