const net = require("net");
const { IP, PORT, playerName } = require("./constants");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write(playerName);

    setTimeout(() => {
      //Canned Messages
      conn.write("Say: sssss");
    }, 5000);
    setTimeout(() => {
      //Canned Messages
      conn.write("Say: sssss apple");
    }, 3000);
    setTimeout(() => {
      //Canned Messages
      conn.write("Say: hungry");
    }, 10000);
    setTimeout(() => {
      //Canned Messages
      conn.write("Say: yum apple ssss");
    }, 15000);
    setTimeout(() => {
      //Canned Messages
      conn.write("Say: ssssssssssssss");
    }, 20000);

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
