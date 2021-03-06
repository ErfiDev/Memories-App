require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');
const Cors = require('cors');
const App = express();
const PORT = process.env.PORT || 5555;

//MiddleWare
App.use(Cors());
App.use(bodyParser.json({ limit: '30mb' , extended: true }));
App.use(bodyParser.urlencoded({ limit: '30mb' , extended: true }));

//Data Base Connecting
Mongoose.connect(
    process.env.DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    ()=>{ console.log('db connected!') }
);
Mongoose.set('useFindAndModify' , false);

//Route
const Routes = require('./routes/index');
App.get('/' , (req,res)=>{
    res.send('hello')
})
App.use('/api' , Routes);

App.listen(PORT , ()=> console.log(`Server Starting on ${PORT}`))