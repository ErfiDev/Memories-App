const express = require('express');
const {getPost , createPost} = require('../controller/postController');

const route = express.Router();

route.get('/get' , getPost);
route.post('/create' , createPost);

module.exports = route;