const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("connected...");

const connection = connect();

setupInput(connection);
