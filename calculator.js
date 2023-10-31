const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});


console.log("Enter 'exit' to quit");

function calculator() {
  rl.question("Enter an operation(+,-,*,/):", (operation) => {
    if (operation === "exit") {
      rl.close();
      return;
    }

    rl.question("Enter Num 1 : ", (number1) => {
      rl.question("Enter Num 2 : ", (number2) => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);

        if (isNaN(num1) || isNaN(num2)) {
          console.log("Not valid numbers. Please enter valid inputs.");
        } else {
          let ans;
          switch (operation) {
            case "+":
              ans = num1 + num2;
              break;
            case "-":
              ans = num1 - num2;
              break;
            case "*":
              ans = num1 * num2;
              break;
            case "/":
              if (num2 == 0) {
                console.log("Error: Denominator cannot be zero.");
                calculator();
                return;
              }
              ans = num1 / num2;
              break;
          }
          console.log("Result:", ans);
        }
        calculator();
      });
    });
  });
}

calculator();
