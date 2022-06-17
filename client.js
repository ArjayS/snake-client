const net = require("net");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  // //Added from 'Connect to the Server' Section
  // conn.on("connect", () => {
  //   console.log("you ded cuz you idled");
  // });

  // //Added from 'Snake Initials' Section
  // conn.on("connect", () => {
  //   console.log("Successfully connected to game server");
  // });

  //Added from 'Snake Initials' Section
  conn.on("connect", () => {
    conn.write("Name: RCS");
  });

  return conn;
};

module.exports = { connect };
