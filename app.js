import methods from "./api/methods.js";
import getCompanyEndpoints from "./api/endpoints.js";

const COMPANY_CODE = "00039002";

const endpoints = getCompanyEndpoints(COMPANY_CODE);

const { companyName } = methods(endpoints);

companyName({ limit: 10, offset: 2 }).then((data) => console.log(data));
