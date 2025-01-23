const express = require('express');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
