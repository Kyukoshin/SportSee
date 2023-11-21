const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.argv[2] || 3000; 

const {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} = require('./data.json'); 

app.use(bodyParser.json());

app.get('/api/user/main-data', (req, res) => {
  res.json(USER_MAIN_DATA);
});

app.get('/api/user/activity', (req, res) => {
  res.json(USER_ACTIVITY);
});

app.get('/api/user/average-sessions', (req, res) => {
  res.json(USER_AVERAGE_SESSIONS);
});

app.get('/api/user/performance', (req, res) => {
  res.json(USER_PERFORMANCE);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
