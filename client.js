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

    // //Move Commands Section - Move up
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 5000);

    // //Move Commands Section - Move left
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 10000);

    // //Move Commands Section - Move down
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 15000);

    // //Move Commands Section - Move down
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 20000);

    // //Move Commands Section - Move left
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 25000);
  });

  return conn;
};

module.exports = { connect };
