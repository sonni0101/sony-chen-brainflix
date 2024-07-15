const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const videoRoutes = require('./routes/videos');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static('public'));

app.use(videoRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});