import createAPI from "./helpers.js";

const { API_URL } = process.env;

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
  },
  {
    name: "listingAllresources",
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

const jsonplaceholder = createAPI(API_URL, config);

export default jsonplaceholder;
