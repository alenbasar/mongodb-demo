const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const postsRouter = require('./Routes/posts');

// Middlewares

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});
app.use('/posts', postsRouter);
// Connect to DB ksbTEdFQiju5yCHU
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('connected to db');
});

// How do we start listening to the server?
app.listen('8000', () => {
  'listening on port 8000';
});
