

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response was not ok!");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        console.log("Fetched Data.");
      });
  });
}

let userId = 1;
fetchUserData(userId)
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((err) => {
    console.log("Error:",err);
  })
  .finally(() => {
    console.log("Done.");
  });
