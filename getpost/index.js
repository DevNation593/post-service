const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const { setupWebSocket } = require('./sockets/websocket');
const app = express();
const server = require('http').createServer(app);
setupWebSocket(server);

app.use(bodyParser.json());
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`getpost service running on port ${PORT}`);
});