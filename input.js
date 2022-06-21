const { connect } = require("./client");

let connection; // We establish a global variable for the other function to use

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  // We placed a paramenter called conn within the setupInput function
  connection = conn; //We created a copy of conn value to the connection global variable. Now the global variable connection has now the same value as conn.

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //Added on Stdin Setup section
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // your code here

  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    // console.log(`w = "Move: up"`);
    connection.write("Move: up");
  }
  if (key === "a") {
    // console.log(`a = "Move: left"`);
    connection.write("Move: left");
  }
  if (key === "s") {
    // console.log(`s = "Move: down"`);
    connection.write("Move: down");
  }
  if (key === "d") {
    // console.log(`d = "Move: right"`);
    connection.write("Move: right");
  }
};

module.exports = { setupInput };
