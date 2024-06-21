import {
  todos,
  todo,
  postByUserId,
  createPost,
  deletePost,
} from "./api/methods.js";

const { log: logger } = console;

(async () => {
  logger(await todos());
  logger(await postByUserId({ userId: 13 }));
  logger(await todo());
  logger(await createPost());
  logger(await deletePost());
})();
