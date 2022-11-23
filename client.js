const net = require("net");
const { IP, PORT } = require('./constants')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    IP, // IP address here,
    PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: JJO")
  });

  // conn.on("connect", () => {
    // setInterval(( ) => conn.write("Move: down"), 50)
    // setTimeout(( ) => conn.write("Move: down"), 50)
  // });
  return conn;
  
};

module.exports = {connect}

