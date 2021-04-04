const dotenv = require('dotenv').config();
const express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const Cors = require('cors');

//Route
const Post = require('./routes/post');

const App = express();
const PORT = process.env.PORT || 5555;

//MiddleWare
App.use(BodyParser.json({ limit: '30mb' , extended: true }));
App.use(BodyParser.urlencoded({ limit: '30mb' , extended: true }));
App.use(Cors());

//Data Base Connecting
Mongoose.connect(
    process.env.DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=> App.listen(PORT , ()=> console.log(`Server Starting on ${PORT}`)))
.catch(err => console.log(err.message));
Mongoose.set('useFindAndModify' , false);

//Use Router
App.use('/post' , Post);