import getData from "./fetch.js";

const BASE_URL = "https://opendatabot.com";

const getCompanyEndpoints = (baseURL) => (code) =>
  [
    {
      name: "companyName",
      url: `${baseURL}/api/v3/public/company/${code}`,
      method: getData,
      errorMessage: "Failed to get menu",
    },
  ];

export default getCompanyEndpoints(BASE_URL);
