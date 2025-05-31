// app.js ✅ BENAR
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Educube Backend is running!');
});


// Middleware & routes bisa ditambahkan di sini
app.use(express.json());

module.exports = app;
