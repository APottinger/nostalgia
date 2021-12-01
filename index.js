import express from 'express';
import nodemon from 'nodemon';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.listen(process.env.PORT, ()=> {console.log('listening')});

mongoose.connect(process.env.CONNECTION_URL)
    .then(res => console.log('connected to db'))
    .catch(error => console.log(error.messages))

    