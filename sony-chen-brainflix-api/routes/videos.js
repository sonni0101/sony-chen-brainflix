const express = require('express');
const router = express.Router();
const videoData = require('../data/videos.json');

router.get('/videos', (req, res)=>{
    res.send(JSON.stringify(videoData));
});

router.get('/videos/:id', (req, res)=>{
    const id = req.params.id;
    const video = videoData.find(video => video.id === id);

    if (video){
        res.json(video);
    } else {
        res.status(404).json({error: 'Video not found!'});
    }
});

module.exports = router;

