const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./src/routes/item.js');
const winston = require('winston');
const { combine, timestamp, printf } = winston.format;

const app = express();

require('dotenv').config();
// Parse JSON request bodies
app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
// Set up logging
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), myFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

// Use the items router
app.use('/api/items', itemsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


