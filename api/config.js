export { getTodosEndpoints, getPostsEndpoints };

const BASE_URL = "https://jsonplaceholder.typicode.com";

const todos = (baseURL) => (id) =>
  [
    {
      name: "todos",
      url: `${baseURL}/todos`,
      method: "GET",
      errorMessage: "Failed to get todos",
    },
    {
      name: "todo",
      url: `${baseURL}/todos/${id}`,
      method: "GET",
      errorMessage: "Failed to get todo",
    },
  ];

const posts = (baseURL) => (id) =>
  [
    {
      name: "createPost",
      url: `${baseURL}/posts`,
      method: "POST",
      errorMessage: "Failed to create post",
    },
    {
      name: "deletePost",
      url: `${baseURL}/posts/${id}`,
      method: "DELETE",
      errorMessage: "Failed to delete post",
    },
    {
      name: "postByUserId",
      url: `${baseURL}/posts`,
      method: "GET",
      errorMessage: "Failed to get post by user id",
    },
  ];

const getTodosEndpoints = todos(BASE_URL);
const getPostsEndpoints = posts(BASE_URL);
