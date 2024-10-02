import jsonplaceholder from "./api/jsonplaceholder.js";

const { creatingResource, gettingResource, listingAllResources } =
  jsonplaceholder;

// Demonstrate the use of the API

const methods = [
  listingAllResources(),
  gettingResource({ id: 42 }),
  creatingResource({ payload: { title: "foo", body: "bar", userId: 1 } }),
];

(async () => {
  const [response1, response2, response3] = await Promise.all(methods);

  // eslint-disable-next-line no-console
  console.log(response1, response2, response3);
})();
