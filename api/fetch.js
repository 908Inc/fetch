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

const getMethod = (options) => async (url, params, errorMessage) => {
  const uri =
    url + (params ? `?${new URLSearchParams(params).toString()}` : "");

  console.log(`\nEndpoint URI: ${uri}\n`);

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

const postMethod = (options) => async (url, body, errorMessage) => {
  options.body = JSON.stringify(body);

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${errorMessage}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

const deleteMethod = (options) => async (url, params, errorMessage) => {
  const uri =
    url + (params ? `?${new URLSearchParams(params).toString()}` : "");

  console.log(`\nEndpoint URI: ${uri}\n`);

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

const getData = getMethod(getOptions);
const postData = postMethod(postOptions);
const deleteData = deleteMethod(deleteOptions);
