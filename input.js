const { connect } = require("./client");
const {
  move_up_key,
  move_left_key,
  move_down_key,
  move_right_key,
} = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write(move_up_key);
  }
  if (key === "a") {
    connection.write(move_left_key);
  }
  if (key === "s") {
    connection.write(move_down_key);
  }
  if (key === "d") {
    connection.write(move_right_key);
  }
};

module.exports = { setupInput };
