import methods from "./api/methods.js";
import { getTodosEndpoints, getPostsEndpoints } from "./api/endpoints.js";

const { log: logger } = console;

const USER_ID = 9;
const POST_ID = 12;

const todosEndpoints = getTodosEndpoints(USER_ID);
const postsEndpoints = getPostsEndpoints(POST_ID);

const { todos, todo } = methods(todosEndpoints);
const { postByUserId, createPost, deletePost } = methods(postsEndpoints);

(async () => {
  logger(await todos());
  logger(await postByUserId({ userId: USER_ID }));
  logger(await todo());
  logger(await createPost());
  logger(await deletePost());
})();
