import express from 'express';
import nodemon from 'nodemon';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();



app.use(cors());
app.listen(PORT);

