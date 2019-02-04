
const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 3000


// app.get('/', (req, res) => {
//   res.send('WORKING!')
// })

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}
const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port)
})

app.use(express.static('public'));


console.log("My socket server is running");

let socket = require('socket.io');

let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection' + socket.id);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    //io.sockets.emit('mouse', data); //send back to all sockets & self
    console.log(data);
  }
}
