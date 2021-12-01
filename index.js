import express from 'express';
import nodemon from 'nodemon';
import cors from 'cors';
import mongoose from 'mongoose';

//initialize application with express
const app = express();

//using cross origin resource sharing
app.use(cors());

//when deploying a host may configue an independant process.env.PORT which may not match local port
const PORT = process.env.PORT || 5000
//configures connection on port 5000 and logs 'listening'
app.listen(PORT, () => {console.log('Listening')});

//mongodb uri to connect to app
const CONNECTION_URI = 'mongodb+srv://Allen7991:Al02061997@nostalgia.3qho6.mongodb.net/nostalgia_db?retryWrites=true&w=majority'

//interface that connects application to mongodb 
mongoose.connect(CONNECTION_URI)
    .then(res => console.log('connected to db'))
    .catch(error => console.log(error))