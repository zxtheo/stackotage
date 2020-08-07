const socket = io()

socket.on('receive', (msg) => {
    console.log(msg)
})