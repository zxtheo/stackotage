const express = require('express')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;
 
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        randomNumber: Math.random(),
        list: [1,2,3,4]
    })
})
 
http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

// This thing
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('chat', (msg) => {
    console.log('message: ' + msg);
    socket.broadcast.emit('receive', msg)
  });
});
