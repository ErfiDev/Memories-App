const express = require('express');
const {init,createPost,findOnePost,updatePost,like,unLike} = require('../controller/postController');

const route = express.Router();

route.get('/init' , init);
route.post('/create' , createPost);
route.get('/findOne/:id' , findOnePost);
route.patch('/update/:id' , updatePost);
route.post('/like/:uuid?' , like);
route.post('/unLike/:uuid?' , unLike);

module.exports = route;