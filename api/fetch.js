const fetchOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

const DEFAULT_ERROR = "Unknown error";

const getData =
  (options) =>
  async (url, params, errorMessage = DEFAULT_ERROR) => {
    const uri =
      url + (params ? `?${new URLSearchParams(params).toString()}` : "");

    console.log(`\nEndpoint URI: ${uri}\n`);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${errorMessage}`);
      }
      return response.json();
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error;
    }
  };

export default getData(fetchOptions);
