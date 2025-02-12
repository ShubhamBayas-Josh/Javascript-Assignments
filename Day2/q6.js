// Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
// the data has been received in the fetch.

const fetchDataWithDelay = () => {
  return fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then(
      (data) => new Promise((resolve) => setTimeout(() => resolve(data), 2000))
    );
};

fetchDataWithDelay()
  .then((data) => {
    console.log("Data received after 2 seconds delay:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
