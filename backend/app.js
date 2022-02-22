// const { Socket } = require("socket.io-client");
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("user xyz");
  socket.on("room", function (data) {
    io.emit("message", data);
  });
});
server.listen(8000);
