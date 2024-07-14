const express = require('express');
const app = express();
const port = 8080;
const videoRoutes = require('./routes/videos');

// // Middleware to parse JSON bodies
// app.use(express.json());

app.use(videoRoutes);

// // Basic error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});