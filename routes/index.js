var express = require('express');
var router = express.Router();

// Get Handlers
var indexHandler = require('./getHandlers/index.js');
// API Handlers
var getPosts = require('./apiHandlers/getPosts.js');
var getSinglePost = require('./apiHandlers/getSinglePost.js');
var getWebsiteInfo = require('./apiHandlers/getWebsiteInfo.js');
// Get Routes
router.get('/', indexHandler);
router.get('/read/:id', indexHandler);

// API Routes
router.get('/get-posts', getPosts);
router.post('/get-post', getSinglePost);
router.get('/get-info', getWebsiteInfo);

module.exports = router;
