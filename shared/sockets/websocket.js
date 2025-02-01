const socketIo = require('socket.io');

function setupWebSocket(server) {
    const io = socketIo(server);
    io.on('connection', (socket) => {
        console.log('Client connected');
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
}

module.exports = { setupWebSocket };