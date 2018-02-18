const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/config');
const User = require('../models/enterprise-model');

//var busboy = require('connect-busboy');
var fs = require('fs');

let Grid = require('gridfs-stream');
let connection = mongoose.connection;
let gfs;

mongoose.Promise = global.Promise;
Grid.mongo = mongoose.mongo;

mongoose.connect(config.dev.db, function(err){
    if(err){
        console.error(err);
    }else{
        console.log('connected to ' + config.dev.db);
    }
});

connection.once("open", () => {
    gfs = Grid(connection.db);
    
    router.post('/uploadVideo', (req, res) => {
        console.log('hip hip hurray');
        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            console.log("Uploading: " + filename + ' mimetype : ' + mimetype);
            fstream = gfs.createWriteStream({
                filename: filename,
                mode: 'w'
                //content_type: part.mimetype
            });
            //fstream = fs.createWriteStream(__dirname + '/files/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {
                console.log('uploaded successfully');
                res.redirect('back');
            });
        });
    });
});

router.get('/', function(req, res){
    res.send('Welcome to Enterprise home page!');
});

router.get('/profile', function(req, res){
    res.send('Enterprise Profile page!');
});

router.post('/profile', function(req, res){
    res.send('Enterprise Profile updated successfully');
});

router.get('/stats', function(req, res){
    res.send('Statistics of videos uploaded till now');
});

module.exports = router;