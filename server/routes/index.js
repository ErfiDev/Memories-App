const express = require('express');
const {init , createPost , findOnePost , updatePost} = require('../controller/postController');

const route = express.Router();

route.get('/init' , init);
route.post('/create' , createPost);
route.get('/findOne/:id' , findOnePost);
route.post('/update/:id' , updatePost);

module.exports = route;