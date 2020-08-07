const express = require('express')
const app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
 
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        randomNumber: Math.random(),
        list: [1,2,3,4]
    })
})
 
http.listen(3000, () => {
    console.log('Listening on port 3000')
})

// This thing
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('chat', (msg) => {
    console.log('message: ' + msg);
    socket.broadcast.emit('receive', msg)
  });
});
