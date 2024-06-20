import methods from "./api/methods.js";
import { getTodosEndpoints, getPostsEndpoints } from "./api/endpoints.js";

const { log: logger } = console;

const POST_ID = 12;
const USER_ID = 9;

const todosEndpoints = getTodosEndpoints(USER_ID);
const postsEndpoints = getPostsEndpoints(POST_ID);

const { todos, todo, postByUserId } = methods(todosEndpoints);

const { createPost, deletePost } = methods(postsEndpoints);

// EXAMPLES:
todos().then(logger);
// postByUserId({ userId: USER_ID }).then(logger);
// todo().then(logger);
// createPost().then(logger);
// deletePost().then(logger);
