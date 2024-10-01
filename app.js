import jsonplaceholder from "./api/jsonplaceholder.js";

const { creatingResource, gettingResource, listingAllresources } =
  jsonplaceholder;

(async () => {
  const response1 = await listingAllresources();
  const response2 = await gettingResource({ id: 42 });
  const response3 = await creatingResource({
    payload: {
      title: "foo",
      body: "bar",
      userId: 1,
    },
  });

  console.log(response1, response2, response3);
})();
