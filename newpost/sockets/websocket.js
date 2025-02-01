const socketIo = require('socket.io');

function setupWebSocket(server) {
    const io = socketIo(server);
    io.on('connection', (socket) => {
        console.log('Client connected');
        socket.on('newPost', (data) => {
            io.emit('updateFeed', data);
        });
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
}

module.exports = { setupWebSocket };