const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors());  // using cors middleware to handle CORS


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});