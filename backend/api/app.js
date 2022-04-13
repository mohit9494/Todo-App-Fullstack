import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/index.js';

// Getting ENV Variables
// Main File for BackEnd Ops
dotenv.config()
const uri = process.env.MONGODB_URI;

// Connect to mongodb
mongoose.connect(uri);

// Creating the Server App
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Trigger the App with respective route
routes(app);

export default app;