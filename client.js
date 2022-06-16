const net = require("net");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  //Added from 'Connect to the Server' Section
  conn.on("connect", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = { connect };
