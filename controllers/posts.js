import express from 'express';
import mongoose from 'mongoose';

import Post from '../models/post.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        await res.send('HELLO');
    } catch (error) {
        console.log(error);
    }
}