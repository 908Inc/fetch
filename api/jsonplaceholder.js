import createAPI from "./api.js";

const jsonplaceholderApiUrl = "https://jsonplaceholder.typicode.com";

/**
 * @typedef {Object} ConfigItem
 * @property {string} name - The name of the method.
 * @property {"GET" | "POST" | "PUT" | "DELETE" | "PATCH"} method - The HTTP method.
 * @property {function} path - A function that generates the API path.
 * @property {Object} [headers] - Optional headers for the request.
 * @property {function} [mapper] - Optional function to map the response data.
 */

/**
 * @type {ConfigItem[]}
 */

const config = [
  {
    name: "creatingResource",
    method: "POST",
    path: () => `/posts`,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  },
  {
    name: "gettingResource",
    method: "GET",
    path: ({ id }) => `/posts/${id}`,
    mapper: ({ id, title }) => ({ id, title }),
  },
  {
    name: "listingAllResources",
    method: "GET",
    path: () => "/posts",
  },
  {
    name: "filteringResources",
    method: "GET",
    path: (userId) => `/posts?userId=${userId}`,
  },
  {
    name: "listingNestedResources",
    method: "GET",
    path: (id) => `/posts/${id}/comments`,
  },
  {
    name: "updatingResource",
    method: "PUT",
    path: (id) => `/posts/${id}`,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  },
  {
    name: "deletingResource",
    method: "DELETE",
    path: (id) => `/posts/${id}`,
  },
  {
    name: "patchingResource",
    method: "PATCH",
    path: (id) => `/posts/${id}`,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  },
];

const jsonplaceholder = createAPI(jsonplaceholderApiUrl, config);

export default jsonplaceholder;
