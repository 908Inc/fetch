export { getData, postData, deleteData };

const getOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

const postOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const deleteOptions = {
  method: "DELETE",
};

const fetcher = async (uri, options, errorMessage) => {
  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
      throw new Error(`Error: ${errorMessage}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

const getURI = (url, params) =>
  url + (params ? `?${new URLSearchParams(params).toString()}` : "");

const getMethod = (options) => async (url, params, errorMessage) =>
  await fetcher(getURI(url, params), options, errorMessage);

const postMethod = (options) => async (url, body, errorMessage) => {
  options.body = JSON.stringify(body);
  return await fetcher(url, options, body, errorMessage);
};

const deleteMethod = (options) => async (url, params, errorMessage) =>
  await fetcher(getURI(url, params), options, errorMessage);

const getData = getMethod(getOptions);
const postData = postMethod(postOptions);
const deleteData = deleteMethod(deleteOptions);
