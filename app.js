import jsonplaceholder from "./api/jsonplaceholder.js";

const { creatingResource, gettingResource, listingAllresources } =
  jsonplaceholder;

(async () => {
  console.log(await listingAllresources());
  console.log(await gettingResource({ id: 42 }));
  console.log(
    await creatingResource({
      payload: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    }),
  );
})();
