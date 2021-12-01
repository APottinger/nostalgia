import express from 'express';
import nodemon from 'nodemon';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

const PORT = process.env.PORT || 5000

app.use(cors());
app.listen(PORT);

const CONNECTION_URL = 'mongodb+srv://Allen7991:<password>@nostalgia.3qho6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'