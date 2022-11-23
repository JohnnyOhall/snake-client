const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.22.129.125", // IP address here,
    port: "50541" // PORT number here,
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