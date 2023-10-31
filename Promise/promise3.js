const cart = ["shoes", "mobiles", "laptops", "shirts", "groceries"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function(orderId){
    return proceedToPayment(orderId);

  }).then(function(paymentInfo){
    console.log(paymentInfo)
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(function(){
    console.log("No matter what happens,I will definetely be called.");
  })


function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        resolve("Payment Successful")
    })

}

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}
