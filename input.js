let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = key => {
  if (key === '\u0003') { // ctrl + C
    process.exit();
  }
  if (key === '\u0077'){ // w
    connection.write("Move: up")
  }
  if (key === '\u0061'){ // a
    connection.write("Move: left")
  }
  if (key === '\u0073'){ // s
    connection.write("Move: down")
  }
  if (key === '\u0064'){ // d
    connection.write("Move: right")
  }
  if (key == 1) { // Speech 1
    connection.write("Say: Your shoe is untied!")
  }
  if (key == 2){ // Speech 2
    connection.write("Say: GG")
  }
  if (key == 3){ // Speech 3
    connection.write("Say: Noooooooooooooo")
  }
};

module.exports = {setupInput};