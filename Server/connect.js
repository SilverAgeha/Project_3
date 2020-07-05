const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vidlinx"
});

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connection Established!");
});

module.exports = connection;
