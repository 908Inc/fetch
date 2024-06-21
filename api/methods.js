import methods from "./composer.js";
import { getTodosEndpoints, getPostsEndpoints } from "./config.js";

export { todos, todo, postByUserId, createPost, deletePost };

const USER_ID = 9;
const POST_ID = 12;

const todosEndpoints = getTodosEndpoints(USER_ID);
const postsEndpoints = getPostsEndpoints(POST_ID);

const { todos, todo } = methods(todosEndpoints);
const { postByUserId, createPost, deletePost } = methods(postsEndpoints);
