const http =
  (apiUrl) =>
  (path, method, headers = {}) =>
  async (options = null) => {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
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
