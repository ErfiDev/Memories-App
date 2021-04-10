const express = require('express');
const {init , createPost} = require('../controller/postController');

const route = express.Router();

route.get('/init' , init);
route.post('/create' , createPost);

module.exports = route;