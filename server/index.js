import Express from 'express';
import BodyParser from 'body-parser';
import Mongoose from 'mongoose';
import Cors from 'cors';

const App = Express();
const DB_CONNECTION = 'mongodb+srv://erfanhanifezade:erfanhanifezadeMemories@cluster0.vhhdf.mongodb.net/Memories?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5555;

//MiddleWare
App.use(BodyParser.json({ limit: '30mb' , extended: true }));
App.use(BodyParser.urlencoded({ limit: '30mb' , extended: true }));
App.use(Cors());

//Data Base Connecting
Mongoose.connect(
    DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=> App.listen(PORT , ()=> console.log(`Server Starting on ${PORT}`)))
.catch(err => console.log(err.message));
Mongoose.set('useFindAndModify' , false);