const express = require("express");
const server = express();
const cors = require("cors");
const upload = require("../upload");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));
server.post("/upload", upload);

server.listenerCount(3000, () => {
  console.log("Server started!");
});
