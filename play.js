const { connect } = require("./client");

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //Added on Stdin Setup section
  stdin.on("data", handleUserInput);

  const handleUserInput = function (key) {
    // your code here
    if (key === "\u0003") {
      process.exit();
    }
  };

  return stdin;
};

console.log("Connecting...");

connect(setupInput);

// const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
// stdin.setRawMode(true);
// stdin.setEncoding("utf8");

// ////////////
// // Event Handling for User Input
// ////////////

// // on any input from stdin (standard input), output a "." to stdout
// stdin.on("data", (key) => {
//   process.stdout.write(".");
//   if (key === "\u0003") {
//     process.exit();
//   }
// });

// console.log("after callback");
