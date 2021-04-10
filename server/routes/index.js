const express = require('express');
const {init , createPost , editPost} = require('../controller/postController');

const route = express.Router();

route.get('/init' , init);
route.post('/create' , createPost);
route.get('/findOne/:id' , editPost);

module.exports = route;