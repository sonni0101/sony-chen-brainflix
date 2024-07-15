const express = require('express');
const router = express.Router();
const videoData = require('../data/videos.json');
const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, '../data/videos.json');

const readDataFromFile = () => {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

const writeDataToFile = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

router.get('/videos', (req, res)=>{
    const videos = readDataFromFile();
    res.json(videos);
});

router.get('/videos/:id', (req, res)=>{
    const id = req.params.id;
    const videosData = readDataFromFile();
    const video = videosData.find(video => video.id === id);

    if (video){
        res.json(video);
    } else {
        res.status(404).json({error: 'Video not found!'});
    }
});

router.post('/videos', (req, res) =>{
    const videosData = readDataFromFile();

    const newVideo = {
        id: Date.now.toString(),
        title: req.body.title,
        channel: req.body.channel,
        image: "https://res.cloudinary.com/dhifyp04n/image/upload/v1720998153/Upload-video-preview_wr3prc.jpg",
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "16:08",
        video: "16:08",
        timestamp: Date.now(),
        comments: []
    };

    videosData.push(newVideo);
    writeDataToFile(videosData);
    res.status(201).json(newVideo);
});

router.post('/videos/:id/comments', (req, res) =>{
    const id = req.params.id;
    const videosData = readDataFromFile();
    const video = videosData.find(video => video.id === id);

    if (!video){
        res.status(404).json({error: 'Video not found!'});
    } 

    const newComment = {
        id: Date.now.toString(),
        name: "Sony",
        comment: req.body.comment,
        likes: 0,
        timestamp: Date.now()
    };

    video.comments.push(newComment);
    writeDataToFile(videosData);
    res.status(201).json(newComment);
});

router.delete('/videos/:videoId/comments/:commentId', (req, res) =>{
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;
    const videosData = readDataFromFile();
    const video = videosData.find(video => video.id === videoId);

    if (!video){
        return res.status(404).json({error: 'Video not found!'});
    } 

    const commentIndex = video.comments.findIndex(comment => comment.id === commentId);

    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found!' });
    }

    video.comments.splice(commentIndex, 1);
    writeDataToFile(videosData);
    res.status(204).send();
});


module.exports = router;

