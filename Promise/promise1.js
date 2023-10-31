const promise = new Promise(function (resolve, reject) {
  let x = -10;

  if (x > 0) {
    resolve("X is Positive");
  }
  reject("X is negative");
});

promise.then(
  (value) => {
    console.log("Value:", value);
  },
  function (error) {
    console.log("Error:", error);
  }
);


const promise2 = new Promise(function (resolve, reject) {
  let a = Math.random();

  if (a > 0.5) {
    resolve(`Resolved since value of a is ${a}`);
  }
  reject(`Rejected since value of a is ${a}`);
});

promise2
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Promise2 Done");
  });
