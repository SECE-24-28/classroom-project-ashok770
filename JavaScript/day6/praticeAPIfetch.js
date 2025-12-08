fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    const data = await response.json();
    console.log("value is ", data);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
