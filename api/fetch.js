const fetchOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

const DEFAULT_ERROR = "Unknown error";

const getData =
  (options) =>
  async (url, errorMessage = DEFAULT_ERROR) => {
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
