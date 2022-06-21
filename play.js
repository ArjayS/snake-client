const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting...");

const connection = connect(); //Will return the conn value from client.js therefore we need to store the value in a variable

setupInput(connection); //We are using the connection variable that we establish a value from client.js and using it in the setupInput function

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
