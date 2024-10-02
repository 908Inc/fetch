import jsonplaceholder from "./api/jsonplaceholder.js";

const { creatingResource, gettingResource, listingAllResources } =
  jsonplaceholder;

// Demonstrate the use of the API
(async () => {
  const [response1, response2, response3] = await Promise.all([
    listingAllResources(),
    gettingResource({ id: 42 }),
    creatingResource({ payload: { title: "foo", body: "bar", userId: 1 } }),
  ]);

  console.log(response1, response2, response3);
})();
